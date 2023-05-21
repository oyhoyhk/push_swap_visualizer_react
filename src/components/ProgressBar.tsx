import styled from '@emotion/styled'

const ProgressBar = ({pos}: { pos: number }) => {
    return <ProgressBarContainer pos={pos}/>
}

const ProgressBarContainer = styled.div<{ pos: number }>`
  width: 900px;
  height: 5px;
  background: #7b7b7b;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: 900px;
    height: 5px;
    background: linear-gradient(to right, red, yellow);
    //transform: translateX(-100%);
    transform: ${({pos}) =>
            `translateX(${-100 + pos}%)`
    }
`

export default ProgressBar