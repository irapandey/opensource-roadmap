// Parsed roadmap data from the TXT file
export const roadmapData = [
  {
    id: 1,
    title: "Choosing the Right Project",
    sections: [
      {
        subtitle: "Key Idea",
        items: ["Your first project determines your open source experience."]
      },
      {
        subtitle: "What to Optimize For",
        items: [
          "Learning curve > Popularity",
          "Active community > Big Project",
          "Clarity > Complexity"
        ]
      },
      {
        subtitle: "Avoid",
        items: [
          "Picking only famous projects"        ]
      },
      {
        subtitle: "Look For",
        items: [
          "Active issues & discussions",
          "Responsive maintainers",
          '`good first issue` / `help wanted` labels',
          "Clear documentation",
          "Ability to run project locally"
        ]
      },
      {
        subtitle: "Strategy",
        items: [
          "Explore multiple projects before committing",
          "Prefer tools you already use"
        ]
      },
      {
        subtitle: "Pro Tip: Shadowing",
        items: [
          "Follow issues & PRs before contributing",
          "Observe Code reviews, Maintainer Decisions and Communication style"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Assigning Your First Issue",
    sections: [
      {
        subtitle: "Key Idea",
        items: ["Assigning = taking ownership (not reserving)"]
      },
      {
        subtitle: "Step 1: Understand the Issue",
        items: [
          "Read full issue + linked discussions",
          "Reproduce bug (if applicable)",
          "Be able to explain it in your own words"
        ]
      },
      {
        subtitle: "Step 2: Scope It",
        items: [
          {
            type: "group",
            title: "Choose",
            items: [
              "Small bug fixes",
              "Documentation updates",
              "Well-defined tasks"
            ]
          },
          {
            type: "group",
            title: "Avoid",
            items: [
              "Large refactors",
              "Unclear discussions"
            ]
          }
        ]
      },
      {
        subtitle: "Step 3: Clarify Before Assigning",
        items: [
          "Comment your understanding",
          "Share approach",
          "Ask for confirmation"
        ]
      },
      {
        subtitle: "Step 4: Look for Prior Art",
        items: [
          {
            type: "group",
            title: "Check",
            items: [
              "Closed PRs",
              "Similar fixes",
              "Existing patterns"
            ]
          }
        ]
      },
      {
        subtitle: "Step 5: Use Community",
        items: [
          {
            type: "group",
            title: "Ask questions in",
            items: [
              "Slack / Discord",
              "GitHub discussions"
            ]
          }
        ]
      },
      {
        subtitle: "Step 6: Assign When Ready",
        items: [
          {
            type: "group",
            title: "Only assign if",
            items: [
              "You understand the problem",
              "Scope is clear",
              "Approach is defined"
            ]
          }
        ]
      },
      {
        subtitle: "Step 7: Stay Active",
        items: [
          "Give periodic updates",
          "Communicate delays",
          "Unassign if stuck"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Raising Your First Pull Request",
    sections: [
      {
        subtitle: "Key Idea",
        items: ["PR = conversation, not submission"]
      },
      {
        subtitle: "Before Opening PR",
        items: [
          "Revisit issue → ensure exact solution",
          {
            type: "group",
            title: "Follow CONTRIBUTING.md",
            items: [
              "Branch naming",
              "Commit format",
              "PR template",
              "CLA / DCO"
            ]
          }
        ]
      },
      {
        subtitle: "DCO Tip",
        items: ['Sign your commits - git commit -s -m "message"']
      },
      {
        subtitle: "Self Review Checklist",
        items: [
          "Test in multiple scenarios",
          "Run tests locally",
          "Remove unrelated changes",
          "Read diff like a reviewer"
        ]
      },
      {
        subtitle: "Writing PR Description",
        items: [
          {
            type: "group",
            title: "Include",
            items: [
              "Problem",
              "Root cause",
              "Changes made",
              "Testing done"
            ]
          }
        ]
      },
      {
        subtitle: "Best Practices",
        items: [
          {
            type: "group",
            title: "Keep PR",
            items: [
              "Small",
              "Focused",
              "Clear"
            ]
          }
        ]
      },
      {
        subtitle: "Draft PRs",
        items: [
          "Use for early feedback",
          "Run CI while working"
        ]
      },
      {
        subtitle: "CI Failures",
        items: [
          "Normal part of workflow",
          "Read logs → fix → push"
        ]
      },
      {
        subtitle: "Avoid",
        items: [
          "Overengineering",
          "Expanding scope"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Responding to Review Comments",
    sections: [
      {
        subtitle: "Key Idea",
        items: ["Reviews = collaboration, not criticism so no panic needed"]
      },
      {
        subtitle: "How to Respond",
        items: [
          "Add small commits per change",
          "Reply to each comment",
          "Mark resolved when done"
        ]
      },
      {
        subtitle: "Best Practices",
        items: [
          "Don't force push (unless asked)",
          "Run linters before pushing"
        ]
      },
      {
        subtitle: "Handling Delays",
        items: ["Wait ~1 week → follow up politely"]
      },
      {
        subtitle: "Mindset",
        items: ["Feedback is about code, not you"]
      },
      {
        subtitle: "Critical Rule",
        items: [
          "❌ Don't abandon PR",
          "✅ Treat review as learning"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "After Your First PR Gets Merged",
    sections: [
      {
        subtitle: "Key Idea",
        items: ["First PR = milestone, not endpoint"]
      },
      {
        subtitle: "Immediate Step",
        items: ["Acknowledge & celebrate"]
      },
      {
        subtitle: "Reflection",
        items: [
          {
            type: "group",
            title: "Revisit PR",
            items: [
              "Review comments",
              "Improvements made",
              "Missed areas"
            ]
          }
        ]
      },
      {
        subtitle: "What You Gain",
        items: [
          "Understanding of workflow",
          "Confidence",
          "Familiarity with codebase"
        ]
      },
      {
        subtitle: "Next Steps",
        items: [
          {
            type: "group",
            title: "Try different contribution types",
            items: [
              "Tests",
              "Bug fixes",
              "Docs",
              "Small features"
            ]
          }
        ]
      },
      {
        subtitle: "Growth Strategy",
        items: [
          "Increase complexity gradually",
          "Stay consistent (not frequent)"
        ]
      },
      {
        subtitle: "Mindset Shift",
        items: [
          "Less hesitation",
          "More confidence",
          "Better decision-making"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Final Flow (Core Mental Model)",
    sections: [
      {
        subtitle: "",
        items: [
          "Choose wisely",
          "Observe deeply",
          "Understand clearly",
          "Start small",
          "Communicate consistently",
          "Iterate and grow"
        ]
      }
    ]
  }
];

// Made with Bob
