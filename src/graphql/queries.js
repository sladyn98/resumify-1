/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResume = /* GraphQL */ `
  query GetResume($id: ID!) {
    getResume(id: $id) {
      id
      basics {
        name
        label
        picture
        email
        phone
        website
        summary
        location {
          address
          city
          region
          postalCode
          countryCode
        }
        profiles {
          network
          url
          username
        }
      }
      work {
        company
        position
        website
        startDate
        endDate
        summary
        highlights
      }
      education {
        institution
        area
        studyType
        startDate
        endDate
        gpa
        courses
      }
      volunteer {
        organization
        position
        website
        startDate
        endDate
        summary
        highlights
      }
      languages {
        language
        fluency
      }
      skills {
        name
        level
        keywords
      }
      awards {
        title
        date
        awarder
        summary
      }
      publications {
        name
        publisher
        website
        releaseDate
        summary
      }
      references {
        name
        reference
      }
      meta {
        theme
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listResumes = /* GraphQL */ `
  query ListResumes(
    $filter: ModelResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        basics {
          name
          label
          picture
          email
          phone
          website
          summary
          location {
            address
            city
            region
            postalCode
            countryCode
          }
          profiles {
            network
            url
            username
          }
        }
        work {
          company
          position
          website
          startDate
          endDate
          summary
          highlights
        }
        education {
          institution
          area
          studyType
          startDate
          endDate
          gpa
          courses
        }
        volunteer {
          organization
          position
          website
          startDate
          endDate
          summary
          highlights
        }
        languages {
          language
          fluency
        }
        skills {
          name
          level
          keywords
        }
        awards {
          title
          date
          awarder
          summary
        }
        publications {
          name
          publisher
          website
          releaseDate
          summary
        }
        references {
          name
          reference
        }
        meta {
          theme
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
