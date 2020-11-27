import styled from 'styled-components';

const PieChartStyles = styled.div`
  .toolTip {
    position: absolute;
    display: none;
    width: auto;
    height: auto;
    background: none repeat scroll 0 0 ${props => props.theme.white};
    border: 0 none;
    border-radius: 8px 8px 8px 8px;
    box-shadow: -3px 3px 15px #888888;
    color: black;
    font: 12px sans-serif;
    padding: 5px;
    text-align: center;
  }
`;

export default PieChartStyles;