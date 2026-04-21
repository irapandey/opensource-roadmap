// Parsed roadmap data from the "Open Source, One Step at a Time" blog series
export const roadmapData = [
  {
    id: 1,
    title: "Choosing the Right Project",
    blogUrl: "https://irapandey.medium.com/open-source-one-step-at-a-time-choosing-the-right-project-78f1a3977103",
    sections: [
      {
        subtitle: "Key Idea",
        items: [
          "Finding the right open source project is about fit, not fame. A well-matched project with active maintainers and clear entry points matters more than contributing to a popular repository."
        ]
      },
      {
        subtitle: "What to Do",
        items: [
          "Shadow the project by subscribing to issues and PRs before contributing to understand workflows",
          "Look for active issues, responsive maintainers, and 'good first issue' labels",
          "Start with tools you already use—familiarity reduces barriers and helps spot improvements",
          "Spend time exploring multiple projects; observation is part of the learning process",
          "Check if issues are active, documentation is clear, and you can run the project locally"
        ]
      },
      {
        subtitle: "What to Avoid",
        items: [
          "Don't choose a project solely because it's famous or has high GitHub stars",
          "Don't try to solve complex issues immediately without understanding the codebase context",
          "Don't ignore documentation, past discussions, and merged pull requests",
          "Don't expect to contribute immediately—observe the workflow first before jumping in"
        ]
      },
      {
        subtitle: "Pro Tip",
        items: [
          "Project maturity levels (like CNCF's Graduated/Incubating/Sandbox) don't indicate quality—they reflect adoption and stability. All levels offer valuable learning; they just differ in learning curves and contribution types."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Assigning Your First Issue",
    blogUrl:"https://medium.com/@irapandey/open-source-one-step-at-a-time-assigning-the-first-issue-53d5404015c9",
    sections: [
      {
        subtitle: "Key Idea",
        items: [
          "Assigning an issue is a public commitment, not a reservation. Success comes from deeply understanding the problem, clarifying your approach publicly, and maintaining consistent communication—not from speed or impressive solutions."
        ]
      },
      {
        subtitle: "What to Do",
        items: [
          "Read the entire issue, linked PRs, and related discussions before assigning",
          "Comment your understanding and rough approach publicly before assigning to help clarify the issue",
          "Search for 'prior art'—similar fixes, patterns, or implementations already in the codebase",
          "Use community channels (Slack/Discord) to ask questions when stuck or unsure",
          "Provide simple weekly updates on progress, blockers, or timelines after assigning",
          "Only assign when you understand the problem, scope is clear, and approach is defined",
          "Choose small, well-defined fixes like reproducible bugs or documentation corrections"
        ]
      },
      {
        subtitle: "What to Avoid",
        items: [
          "Don't assign issues with unclear scope, large refactors, or long unresolved discussions",
          "Don't immediately assign without understanding—labels are starting points, not guarantees",
          "Don't go silent after assigning—transparency about delays is respected far more than silence",
          "Don't try to impress with ambitious scope—your first contribution needs to be finishable, not impressive"
        ]
      },
      {
        subtitle: "Pro Tip",
        items: [
          "Not every issue is fully understood by maintainers. By commenting your reasoning publicly before coding, you're not just preparing—you're often providing the missing structure the issue needed. Visible reasoning moves conversations forward even when slightly wrong."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Raising Your First Pull Request",
    blogUrl:"https://irapandey.medium.com/open-source-one-step-at-a-time-choosing-the-right-project-78f1a3977103",
    sections: [
      {
        subtitle: "Key Idea",
        items: [
          "A pull request is a conversation, not a submission. Your goal isn't perfection or impressing reviewers—it's clarity in explaining what you did, why you did it, and making your thinking easy to understand for future contributors."
        ]
      },
      {
        subtitle: "What to Do",
        items: [
          "Review your own PR first using the 'rule of three'—validate fixes in at least three different scenarios",
          "Write PR descriptions that explain what was happening, why it happened, what you changed, and how you tested it",
          "Use draft PRs for early feedback when unsure about direction—openness leads to better outcomes",
          "Follow contribution guidelines carefully: branch naming, PR title format, commit standards, DCO sign-offs (git commit -s)",
          "Run tests locally before pushing—passing local tests shows respect for reviewer time",
          "Read the diff slowly as if it's someone else's code before submitting"
        ]
      },
      {
        subtitle: "What to Avoid",
        items: [
          "Don't drift into redesigning the system while fixing a small bug—solve the problem, don't expand scope",
          "Don't panic when CI checks fail—read logs carefully, fix locally, and push again; it's workflow, not judgment",
          "Don't skip running tests locally before pushing to CI",
          "Don't overengineer your first PR by adding improvements beyond the issue scope"
        ]
      },
      {
        subtitle: "Pro Tip",
        items: [
          "Your PR description isn't just for today's reviewer—it's for the contributor who returns two years later wondering 'Why was this changed?' Document the decision, not just the code. Future you (and others) will thank you."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Responding to Review Comments",
    blogUrl:"https://irapandey.medium.com/open-source-one-step-at-a-time-responding-to-review-comments-3bfe9715df1e",
    sections: [
      {
        subtitle: "Key Idea",
        items: [
          "Review comments are collaboration, not criticism. They represent maintainers investing time in your work, and responding thoughtfully—even when comments feel intimidating—is what separates contributors who grow from those who abandon their PRs."
        ]
      },
      {
        subtitle: "What to Do",
        items: [
          "Take time to read comments carefully and understand suggestions before reacting—give yourself breathing room",
          "Add small incremental commits addressing comments one by one to keep history clear for reviewers",
          "Reply to comments explaining what you changed and mark conversations as resolved to keep threads clean",
          "Follow up politely after a week if no response: 'I've addressed the comments, would love another look when you have time'",
          "Run linters before pushing changes to avoid repeated CI failures"
        ]
      },
      {
        subtitle: "What to Avoid",
        items: [
          "Don't take feedback personally—comments are about code, not you; text doesn't carry tone well",
          "Don't force push while reviews are ongoing unless maintainers specifically request it",
          "Don't abandon your PR when comments feel intimidating—every review is a learning opportunity",
          "Don't forget to run linters before pushing—build this habit early"
        ]
      },
      {
        subtitle: "Pro Tip",
        items: [
          "Review comments often fall into categories: stylistic changes, test requests, clarification questions, or better approaches. Understanding the type helps you respond appropriately. Most comments are suggestions, not demands—there's no hidden meaning."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "After Your First PR Gets Merged",
    blogUrl:"https://medium.com/@irapandey/open-source-one-step-at-a-time-after-your-first-pr-gets-merged-2ac5728a9d8c",
    sections: [
      {
        subtitle: "Key Idea",
        items: [
          "Your first merged PR is a milestone that proves you can contribute, but the real growth comes from reflection and building momentum without pressure. One PR gives you confidence; what you do next determines where you grow."
        ]
      },
      {
        subtitle: "What to Do",
        items: [
          "Pause and celebrate your first merge—acknowledge the milestone before rushing to the next issue",
          "Revisit your merged PR to study review comments, changes made, and how your approach evolved",
          "Try something slightly different for your next contribution—if you fixed a bug, try documentation; if you wrote tests, try a code change",
          "Keep coming back consistently without daily pressure—momentum matters more than speed",
          "Reflect on what you missed, what maintainers suggested, and patterns you're starting to notice"
        ]
      },
      {
        subtitle: "What to Avoid",
        items: [
          "Don't immediately jump to the next issue—take time to reflect on what you learned from the first one",
          "Don't turn momentum into pressure by feeling you must contribute every day",
          "Don't assume one merged PR makes you experienced—you're still a beginner, but now with confidence",
          "Don't ignore the learning hidden in your first contribution—patterns you notice now improve future work"
        ]
      },
      {
        subtitle: "Pro Tip",
        items: [
          "The biggest shift after your first PR isn't technical—it's mental. The hesitation reduces, the fear of 'what if this is wrong' shrinks, and you start trusting yourself more. That confidence is what really changes your open source journey."
        ]
      }
    ]
  }
];

// Data extracted from "Open Source, One Step at a Time" blog series

// Made with Bob
