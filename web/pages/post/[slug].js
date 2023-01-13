import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
// import {PortableText} from '@portabletext/react'
import client from '../../client'


function urlFor (source = SanityImageSource) {
  console.log(source)
  return imageUrlBuilder(client).image(source)
}
console.log(urlFor(source))

// const ptComponents = {
//   types: {
//     image: ({ value }) => {
//       if (!value?.asset?._ref) {
//         return null
//       }
//       return (
//         <img
//           alt={value.alt || ' '}
//           loading="lazy"
//           src={urlFor(value).width(320).height(240).fit('max').auto('format')}
//         />
//       )
//     }
//   }
// }


const Post = ({post}) => {
  const { title = 'Missing title', name = 'Missing name', categories  } = post
  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      {authorImage && (
        <div>
          <img
            src={urlFor(authorImage)
              .width(50)
              .url()}
          />
        </div>
      )}
    </article>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title
  "authorImage": author->image
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}

export default Post