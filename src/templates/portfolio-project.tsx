import * as React from 'react'
import Icon from '../components/icons'
import { graphql } from 'gatsby'
import { SEO } from '../components'
import { getImage, GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { SingleProjectProps } from '../types'

const PortfolioProjectTemplate = ({ data }: { data: SingleProjectProps }) => {
  const project = data.markdownRemark.frontmatter
  const image1 = getImage(project.image1)
  const image2 = getImage(project.image2)
  const image3 = getImage(project.image3)
  const image4 = getImage(project.image4)
  const image5 = getImage(project.image5)
  return (
    <>
      <SEO
        title={project.title}
        description={project.description || project.excerpt}
      />
      <header className="grid grid-cols-12 gap-x-8 mb-16 lg:mb-32">
        <div className="flex justify-between items-center col-span-full lg:col-start-2 lg:col-end-12 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold dark:text-white mb-0">
            {project.title}
          </h2>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-500 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg transition ease-in-out duration-300 flex items-center"
            >
              Visit site
              <Icon name="external" className="ml-2" />
            </a>
          )}
        </div>
        <GatsbyImage
          className="col-span-full lg:col-start-2 lg:col-end-12 mb-12"
          image={image1 as IGatsbyImageData}
          alt=""
        />
        <p className="col-span-full lg:col-start-2 lg:col-end-9 mb-12 lg:mb-0 mt-0 text-gray-500 dark:text-gray-400 text-2xl lg:text-3xl font-semibold leading-snug">
          {project.content1}
        </p>

        <div className="col-span-full lg:col-start-9 lg:col-end-12 font-semibold">
          <p className="text-xl mb-2 text-black dark:text-white">Role</p>
          {/* prettier-ignore */}
          <p className="text-xl mt-0 text-gray-500 dark:text-gray-400 mb-4">{project.role}</p>
          {project.contributors.length > 0 && (
            <>
              <p className="text-xl mb-2 text-black dark:text-white">
                Contributors
              </p>
              <ul className="text-xl text-gray-500 dark:text-gray-400 mb-4">
                {project.contributors.map((contributor, index) => (
                  <li key={index}>??? {contributor}</li>
                ))}
              </ul>
            </>
          )}
          <p className="text-xl mb-2 text-black dark:text-white">Year</p>
          {/* prettier-ignore */}
          <p className="text-xl text-gray-500 dark:text-gray-400 mt-0">{project.year}</p>
        </div>
      </header>
      <main className="grid grid-cols-12 gap-x-8">
        <GatsbyImage
          image={image2 as IGatsbyImageData}
          className="col-span-full lg:col-start-2 lg:col-end-7 mb-20"
          alt=""
        />
        <GatsbyImage
          className="col-span-full lg:col-start-7 lg:col-end-12 mb-20"
          image={image3 as IGatsbyImageData}
          alt=""
        />

        <h6 className="col-span-full lg:col-start-2 lg:col-end-9 sm:text-lg md:text-xl lg:text-2xl font-semibold mb-8 dark:text-white">
          {project.title1}
        </h6>
        <p className="col-span-full lg:col-start-2 lg:col-end-9 mb-12 text-2xl lg:text-3xl text-gray-500 dark:text-gray-400 font-semibold leading-snug">
          {project.content2}
        </p>
        <GatsbyImage
          className="col-span-full lg:col-start-2 lg:col-end-12 mb-24"
          image={image4 as IGatsbyImageData}
          alt=""
        />
        <h6 className="col-span-full lg:col-start-2 lg:col-end-9 sm:text-lg md:text-xl lg:text-2xl font-semibold mb-8 dark:text-white">
          {project.title2}
        </h6>
        <p className="col-span-full lg:col-start-2 lg:col-end-9 text-2xl lg:text-3xl text-gray-500 dark:text-gray-400 font-semibold mb-12 leading-snug">
          {project.content3}
        </p>
        <GatsbyImage
          className="col-span-full lg:col-start-2 lg:col-end-12 mb-24"
          image={image5 as IGatsbyImageData}
          alt=""
        />
        {project.content4 && project.title3 && (
          <>
            <h6 className="col-span-full lg:col-start-2 lg:col-end-9 sm:text-lg md:text-xl lg:text-2xl font-semibold mb-8 dark:text-white">
              {project.title3}
            </h6>
            <p className="col-span-full lg:col-start-2 lg:col-end-9 mb-12 text-2xl lg:text-3xl text-gray-500 dark:text-gray-400 font-semibold leading-snug">
              {project.content4}
            </p>
          </>
        )}
      </main>
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
        link
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
        content4
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
