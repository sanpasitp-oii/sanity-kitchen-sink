export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f75a07465f6263bd59c1728',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ago1963f',
                  apiId: 'a13f1419-a23e-47c0-ace9-d9fc161893a1'
                },
                {
                  buildHookId: '5f75a074ab8cdb370ba99ffb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-89mbnis1',
                  apiId: '5fb362b4-dd0c-482a-9952-f2eaae342d28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sanpasitp-oii/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-89mbnis1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
