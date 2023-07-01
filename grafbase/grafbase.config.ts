import { g, auth, config } from '@grafbase/sdk'

const user = g.model('User', {
  name: g.string(),
  age: g.int(),
  email: g.string().unique(),
  avatarUrl:g.url(),
  description:g.string().optional(),
  github:g.string().optional(),
projects:g.relation(() => Project).list().optional(),
})
const Project = g.model('Project', {
  title:g.string().length({min:2, max:50}),
  description:g.string(),
  image:g.url(),
  livesite:g.url(),
  github:g.string(),
  category:g.string().search(),
  createdby:g.relation(() => user),

})



  

export default config({
  schema: g

})
