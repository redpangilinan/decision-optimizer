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
- **Value**: A numerical value representing the worth of the factor (e.g., 50-100)
- **Importance**: A weight multiplier assigned to the factor based on its importance
  - Very Important (1.4x)
  - Important (1.2x)
  - Neutral (1x)
  - Unimportant (0.8x)
  - Very Unimportant (0.6x)
- **Type**: Indicates whether the factor is positive or negative

## Formula

Normalized Decision Factor Values (PositiveSum & NegativeSum)

```
∑(((FactorValue - 50) / (100 - 50)) * ImportanceWeight)
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