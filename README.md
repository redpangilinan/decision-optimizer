# Decision Optimizer

A decision optimization web tool built with Next.js 14 app router.

> **Notice:** This app is work in progress.

## Tech Stack

- Next.js 14 app router - Framework
- TypeScript - Language
- Tailwind - CSS Framework
- shadcn/ui - UI Components
- Zustand - State Management
- Zod - Validation

## Decision Factors

Each factor includes the following:
- **Name**: A descriptive name for the factor (e.g., Enjoyment, Convenience)
- **Importance**: A value assigned to the factor based on its importance
  - Very Important (5)
  - Important (4)
  - Neutral (3)
  - Unimportant (2)
  - Very Unimportant (1)
- **Type**: Indicates whether the factor is positive or negative

## Formula

Normalized Decision Value Sum (PositiveSum & NegativeSum)

```
∑((ImportanceValue - 1) / (5 - 1))
```

Overall Decision Value

```
((PositiveSum - NegativeSum) / FactorLength) * 50 + 50
```

## Work in progress

- Decision risks
  - Lower multiplier for high risk decisions
  - Separate results with normal multiplier for high risk decisions to show non-optimal but big payoff decisions
- AI integration (unsure)
  - Auto generate decisions based on the goal or situation
  - Auto generate factors based on the decision