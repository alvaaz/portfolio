import * as React from 'react'
import { External } from '../components/icons'
import { graphql } from 'gatsby'
import { SEO } from '../components'
import { getImage, GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { SingleProjectProps } from '../types'
import { Link } from 'gatsby'

const PortfolioProjectTemplate = ({ data }: { data: SingleProjectProps }) => {
  const project = data.markdownRemark
  const image1 = getImage(project.frontmatter.image1)
  const image2 = getImage(project.frontmatter.image2)
  const image3 = getImage(project.frontmatter.image3)
  const image4 = getImage(project.frontmatter.image4)
  const image5 = getImage(project.frontmatter.image5)
  return (
    <>
      <SEO
        title={project.frontmatter.title}
        description={
          project.frontmatter.description || project.frontmatter.excerpt
        }
      />
      <header className="grid grid-cols-12 gap-x-8 mb-32">
        <h2 className="text-6xl font-bold col-start-2 col-end-9 mb-12 dark:text-white">
          {project.frontmatter.title}
        </h2>
        <GatsbyImage
          className="col-start-2 col-end-12 mb-12"
          image={image1 as IGatsbyImageData}
          alt=""
        />
        <p className="col-start-2 col-end-10 mb-0 mt-0 text-gray-500 dark:text-gray-400 text-3xl font-semibold">
          {project.frontmatter.excerpt}
          <a
            href="https://labs.jumpitt.com"
            target="_blank"
            className="mt-16 text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-500 dark:hover:bg-gray-900 cursor-pointer rounded-lg transition ease-in-out duration-300 flex items-center"
          >
            Ir al sitio
            <External className="ml-2" />
          </a>
        </p>

        <div className="col-start-10 col-end-12 font-semibold">
          <p className="text-xl mb-2 text-black dark:text-white">Rol</p>
          {/* prettier-ignore */}
          <p className="text-xl mb-0 mt-0 text-gray-500 dark:text-gray-400">{project.frontmatter.role}</p>
          <p className="text-xl mb-2 text-black dark:text-white">
            Colaboradores
          </p>
          <ul className="text-xl text-gray-500 dark:text-gray-400">
            {project.frontmatter.contributors.map((contributor) => (
              <li>— {contributor}</li>
            ))}
          </ul>
          <p className="text-xl mb-2 text-black dark:text-white">Año</p>
          {/* prettier-ignore */}
          <p className="text-xl text-gray-500 dark:text-gray-400 mt-0">{project.frontmatter.year}</p>
        </div>
      </header>
      <main className="grid grid-cols-12 gap-x-8">
        <GatsbyImage
          image={image2 as IGatsbyImageData}
          className="col-start-2 col-end-7 mb-20"
          alt=""
        />
        <GatsbyImage
          className="col-start-7 col-end-12 mb-20"
          image={image3 as IGatsbyImageData}
          alt=""
        />

        <h6 className="col-start-2 col-end-9 text-2xl font-semibold mb-8 dark:text-white">
          Desafío
        </h6>
        <p
          className="col-start-2 col-end-9 mb-12 text-gray-500 dark:text-gray-400 font-semibold"
          style={{ fontSize: '32px' }}
        >
          {project.frontmatter.content1}
        </p>
        <GatsbyImage
          className="col-start-2 col-end-12 mb-24"
          image={image4 as IGatsbyImageData}
          alt=""
        />
        <h6 className="col-start-2 col-end-9 text-2xl font-semibold mb-8 dark:text-white">
          Proceso
        </h6>
        <p
          className="col-start-2 col-end-9 text-gray-500 dark:text-gray-400 font-semibold mb-12"
          style={{ fontSize: '32px' }}
        >
          {project.frontmatter.content2}
        </p>
        <GatsbyImage
          className="col-start-2 col-end-12 mb-24"
          image={image5 as IGatsbyImageData}
          alt=""
        />
      </main>
      <div>
        <Link to={`/portfolio${data.next.fields.slug}`}>
          <p>Next project</p>
          <h6>{data.next.frontmatter.title}</h6>
        </Link>
      </div>
    </>
  )
}

export default PortfolioProjectTemplate

export const pageQuery = graphql`
  query PortfolioProjectBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        role
        year
        excerpt
        contributors
        image1 {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        image2 {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        title1
        content1
        title2
        content2
        image3 {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        title3
        content3
        image4 {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        image5 {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
    previous: markdownRemark(
      id: { eq: $previousPostId }
      fileAbsolutePath: { regex: "/portfolio/" }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(
      id: { eq: $nextPostId }
      fileAbsolutePath: { regex: "/portfolio/" }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`