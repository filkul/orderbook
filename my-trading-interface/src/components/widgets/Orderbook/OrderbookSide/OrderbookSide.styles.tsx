import { styled } from "linaria/react"

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  text-align: right;
  & > * {
    padding: 5px 30% 5px 10%;
  }
`

export const HeaderItem = styled.div`
  grid-row-start: 1;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-bg-primary);

  @media (max-width: 480px) {
    .bids & {
      display: none;
    }
  }
`

export const HeaderPrice = styled(HeaderItem)`
  .bids & {
    grid-column-start: 3;
  }
`

export const HeaderSize = styled(HeaderItem)``

export const HeaderTotal = styled(HeaderItem)`
  .bids & {
    grid-column-start: 1;
  }
`

interface RowItemProps {
  row: number
}

export const RowItem = styled.div<RowItemProps>`
  grid-row-start: ${props => props.row};
  z-index: 1;

  @media (max-width: 480px) {
    .asks & {
      grid-row-start: ${props => 100 - props.row};
    }
  }
`

export const RowPrice = styled(RowItem)`
  grid-column: 1 / span 1;
  .bids & {
    color: var(--color-bid-primary);

    @media (min-width: 481px) {
      grid-column-start: 3;
    }
  }
  .asks & {
    color: var(--color-ask-primary);
  }
`

export const RowSize = styled(RowItem)`
  grid-column: 2 / span 1;
`

export const RowTotal = styled(RowItem)`
  grid-column: 3 / span 1;
  .bids & {
    @media (min-width: 481px) {
      grid-column-start: 1;
    }
  }
`

interface RowDepthProps {
  width: number
}

export const RowDepth = styled(RowItem)<RowDepthProps>`
  grid-column: 1 / -1;
  background-color: var(--color-ask-secondary);
  transform: scaleX(${props => props.width});
  transform-origin: 0 0;
  width: 100%;
  z-index: 0;
  .bids & {
    background-color: var(--color-bid-secondary);

    @media (min-width: 481px) {
      transform-origin: 100% 0;
    }
  }
`
