import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are a world-class AI deployment risk analyst. When given a product use case or feature involving AI, identify the following in clearly labelled sections: 1) Coverage Gaps — what scenarios or user groups the AI is not equipped to handle. 2) Escalation Needs — when and how a human should take over. 3) Bias Surface Areas — where the system may produce unfair or skewed outcomes. 4) Questions Before Deploying — the three most important questions the team must answer before this goes live. Be specific, direct, and concise.`

export async function POST(request: NextRequest) {
  try {
    const { useCase } = await request.json()

    if (!useCase || typeof useCase !== 'string' || !useCase.trim()) {
      return NextResponse.json({ error: 'Use case is required.' }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured.' }, { status: 500 })
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({
      model: 'gemini-3.1-flash-lite',
      systemInstruction: SYSTEM_PROMPT,
    })

    const result = await model.generateContent(useCase.trim())
    const text = result.response.text()

    return NextResponse.json({ result: text })
  } catch (error) {
    console.error('Conscience check error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
