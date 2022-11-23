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
                  buildHookId: '637eb3d289f6417171e8f33e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ekarzq1x',
                  apiId: '8e052dee-0887-4301-b105-e4a533743079'
                },
                {
                  buildHookId: '637eb3d35737096ac717665c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-x6k85e8r',
                  apiId: 'e7c8c17a-01be-45ba-9c81-aa87d880823c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jackpm96/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-x6k85e8r.netlify.app', category: 'apps'}
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
