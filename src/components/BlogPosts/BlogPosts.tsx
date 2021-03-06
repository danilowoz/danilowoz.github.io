import React from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'
import NextLink from 'next/link'

import { PostsListProps } from 'service/projects'

import { Box } from '../Box'

const TitleSeeMore = styled.h4`
  margin-bottom: -2em;
  border-bottom: 1px solid #eee;
  display: block;
  width: 100%;
  padding-bottom: 0.5em;

  @media (min-width: 576px) {
    margin-bottom: -7em;
  }
`

const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const Description = styled.div`
  padding: 1rem;
  padding-top: 2rem;

  h2 {
    line-height: 1.4;
    margin: 0;
    font-weight: 600;
    letter-spacing: -1px;
    color: var(--color-grey-2);
    font-size: 2em;
  }

  p {
    margin-top: 1em;
    color: var(--color-grey-1);
    transition: color 300ms ease;
  }
`

const Figure = styled.figure`
  width: 100%;
  height: 0;
  overflow: hidden;
  position: relative;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.02), 0 2.3px 2.5px rgba(0, 0, 0, 0.028),
    0 4.4px 4.6px rgba(0, 0, 0, 0.035), 0 7.8px 8.3px rgba(0, 0, 0, 0.03),
    0 14.6px 15.5px rgba(0, 0, 0, 0.05), 0 35px 37px rgba(0, 0, 0, 0.01);
  border-radius: 0.3em;

  div,
  img {
    width: 100%;
    height: 100%;
    transition: transform 300ms ease;
  }

  div {
    position: absolute;
    left: 0;
    top: 0;

    overflow: hidden;
  }

  img {
    object-fit: cover;
  }

  * {
    margin: 0;
    color: rgb(var(--color-background));
  }
`

const ShadowImage = styled.div`
  position: absolute;
  left: 0.4em;
  right: 0.4em;
  top: 1em;
  filter: blur(20px);
  opacity: 0.8;

  ${Figure} {
    box-shadow: none;
  }
`

const hoverArticle = css`
  @media (hover: hover) {
    &:hover {
      img {
        transform: scale(1.02);
      }

      p {
        color: rgb(var(--color-foreground));
      }
    }
  }
`

const Article = styled.article`
  width: 100%;
  margin-bottom: 2em;
  position: relative;

  &::not(::last-of-type) {
    margin-bottom: 2em;
  }

  ${hoverArticle};

  @media (min-width: 576px) {
    margin-bottom: 0;
    width: calc(50% - 2em);
  }

  @media (min-width: 769px) {
    margin-bottom: 0;
    width: calc(
      50% - (var(--grid-width) / var(--grid-column) - var(--grid-gutter)) / 2
    );
  }

  a {
    display: block;
  }

  &:nth-child(4n) ${Figure}, &:nth-child(4n + 1) ${Figure} {
    padding-top: 60%;
  }

  &:nth-child(4n + 2) ${Figure}, &:nth-child(4n + 3) ${Figure} {
    padding-top: 100%;
  }
`

const ArticleSmall = styled.article`
  ${hoverArticle};

  @media (min-width: 576px) {
    grid-column: span 3;
  }

  @media (min-width: 769px) {
    grid-column: span 4;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 600;
    color: rgb(var(--color-foreground));
  }

  p {
    color: var(--color-grey-1);
    transition: color 300ms ease;
    line-height: 1.4;
  }
`

const CallToActionWrapper = styled.div`
  &,
  span {
    color: var(--color-cta);
    display: flex;
    align-items: center;
    line-height: 1;
  }

  img {
    position: relative;
    transition: transform 200ms ease;
  }
`

const NUMBER_FEATURES = 10

const BlogPosts: React.FC<{ data: PostsListProps[]; compact?: boolean }> = ({
  data,
  compact,
}) => {
  const featuresData = data.slice(0, NUMBER_FEATURES)
  const restData = compact
    ? data.slice(0, 3)
    : data.slice(NUMBER_FEATURES, data.length)

  return (
    <List id="BlogPosts">
      {!compact &&
        featuresData.map((item) => {
          return (
            <Article key={item.title}>
              <Link type={item.type} href={item?.link ?? ''}>
                <ShadowImage>
                  <Figure>
                    {item.cover && (
                      <Image
                        width="2400"
                        height="1200"
                        src={item.cover}
                        alt={item.title}
                      />
                    )}
                  </Figure>
                </ShadowImage>

                <Figure>
                  {item.cover && (
                    <Image
                      width="2400"
                      height="1200"
                      src={item.cover}
                      alt={item.title}
                    />
                  )}
                </Figure>

                <Description>
                  <h2>{item.title}</h2>
                  <p>{item.tagline}</p>

                  <CallToActionWrapper>
                    Read more
                    {` ->`}
                  </CallToActionWrapper>
                </Description>
              </Link>
            </Article>
          )
        })}

      {compact && <TitleSeeMore>See more</TitleSeeMore>}
      {restData.length > 0 && (
        <Box>
          {restData.map((item) => {
            return (
              <ArticleSmall key={item.title}>
                <Link type={item.type} href={item?.link ?? ''}>
                  <h1>{item.title}</h1>

                  <div>
                    <p>{item.tagline}</p>

                    <CallToActionWrapper>
                      <span>
                        Read more
                        {` ->`}
                      </span>
                    </CallToActionWrapper>
                  </div>
                </Link>
              </ArticleSmall>
            )
          })}
        </Box>
      )}
    </List>
  )
}

export const Link: React.FC<{
  href: string
  type: PostsListProps['type']
}> = ({ type, href, children }) => {
  if (type === 'article') {
    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
      <NextLink href="/blog/[slug]" as={href}>
        <a>{children}</a>
      </NextLink>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export { BlogPosts }
