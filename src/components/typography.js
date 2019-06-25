import styled, { css } from 'styled-components'

export const globalStyle = css`
  body {
    scroll-behavior: smooth;
    font-family: var(--mainFont);
    font-size: 15px;
    line-height: 1.4em;

    @media (min-width: 800px) {
      font-size: 18px;
    }
  }
`

export const MainTitle = styled.h1`
  transition: color var(--transitionEase);
  font-family: var(--mainFontSerif);

  font-size: 2.8em;
  line-height: 1.2em;
  margin-top: 0.4893617em;
  margin-bottom: 0.4893617em;
`

export const titleStyle = css`
  transition: color var(--transitionEase);
  color: var(--main);
  font-family: var(--mainFontSerif);
  letter-spacing: 1px;

  font-size: 2em;
  line-height: 1.5862069em;
  margin-top: 0.79310345em;
  margin-bottom: 0.2em;

  span {
    font-weight: normal;
  }
`

export const Title = styled.h2`
  ${titleStyle}
`

export const HeadLine = styled.h3`
  transition: color var(--transitionEase);

  font-size: 1.5em;
  line-height: 1.5862069em;
  margin-top: 0.79310345em;
  margin-bottom: 0em;
`

export const labelStyle = css`
  transition: color var(--transitionEase);
  color: var(--foreground);
  line-height: 1.4em;
  font-size: 0.7em;

  margin-top: 0em;
  margin-bottom: 1.27777778em;
`

export const Label = styled.p`
  ${labelStyle}
  transition: color var(--transitionEase);
`

export const textStyle = css`
  transition: color var(--transitionEase);
  color: var(--foreground);
  line-height: 1.5em;
  font-size: 1rem;

  margin-top: 0em;
  margin-bottom: 1.27777778em;
`

export const Text = styled.p`
  ${textStyle};
`

export const linkableStyle = css`
  ${textStyle};
  & {
    transition: color var(--transitionEase);
    border: 0;
    background: none;
    padding: 0;
    opacity: 0.7;
    color: var(--main);
    text-decoration: none;
    transition: opacity var(--transitionEase);

    &:hover {
      opacity: 1;
    }
  }
`

export const Linkable = styled.p`
  ${linkableStyle}
`
