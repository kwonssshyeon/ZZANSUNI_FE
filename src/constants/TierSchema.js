export const tierGroups = [
  {
    group: '노비',
    color: 'var(--color-class-01)',
    // exp gap : 50
    tiers: [
      {
        tier: '노비 I',
        totalExp: 50,
      },
      {
        tier: '노비 II',
        totalExp: 100,
      },
      {
        tier: '노비 III',
        totalExp: 150,
      },
      {
        tier: '노비 IV',
        totalExp: 200,
      },
    ],
  },
  {
    group: '상민',
    color: 'var(--color-class-02)',
    // exp gap : 100
    tiers: [
      {
        tier: '상민 I',
        totalExp: 250,
      },
      {
        tier: '상민 II',
        totalExp: 350,
      },
      {
        tier: '상민 III',
        totalExp: 450,
      },
      {
        tier: '상민 IV',
        totalExp: 550,
      },
    ],
  },
  {
    group: '평민',
    color: 'var(--color-class-03)',
    // exp gap : 150
    tiers: [
      {
        tier: '평민 I',
        totalExp: 700,
      },
      {
        tier: '평민 II',
        totalExp: 850,
      },
      {
        tier: '평민 III',
        totalExp: 1000,
      },
      {
        tier: '평민 IV',
        totalExp: 1150,
      },
    ],
  },
  {
    group: '양반',
    color: 'var(--color-class-04)',
    // exp gap : 200
    tiers: [
      {
        tier: '양반 I',
        totalExp: 1350,
      },
      {
        tier: '양반 II',
        totalExp: 1550,
      },
      {
        tier: '양반 III',
        totalExp: 1750,
      },
      {
        tier: '양반 IV',
        totalExp: 1950,
      },
    ],
  },
  {
    group: '진골',
    color: 'var(--color-class-05)',
    // exp gap : 250
    tiers: [
      {
        tier: '진골 I',
        totalExp: 2200,
      },
      {
        tier: '진골 II',
        totalExp: 2450,
      },
      {
        tier: '진골 III',
        totalExp: 2700,
      },
      {
        tier: '진골 IV',
        totalExp: 2950,
      },
    ],
  },
  {
    group: '성골',
    color: 'var(--color-class-06)',
    // exp gap : 300
    tiers: [
      {
        tier: '성골 I',
        totalExp: 3250,
      },
      {
        tier: '성골 II',
        totalExp: 3550,
      },
      {
        tier: '성골 III',
        totalExp: 3850,
      },
      {
        tier: '성골 IV',
        totalExp: 4150,
      },
    ],
  },
  {
    group: '에코',
    color: 'var(--color-class-07)',
    // exp gap : 350
    tiers: [
      {
        tier: '에코',
        totalExp: 4500,
      },
    ],
  },
];

export function getTierDetails(tierName) {
  for (const group of tierGroups) {
    for (const tier of group.tiers) {
      if (tier.tier === tierName) {
        return {
          color: group.color,
          tier: tier.tier,
          totalExp: tier.totalExp,
        };
      }
    }
  }
  return null;
}
