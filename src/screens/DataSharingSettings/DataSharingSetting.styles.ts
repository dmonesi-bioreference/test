import styled from 'styled-components';

import { tokens } from 'styles'

const DataSharingSettings = styled.div`
.data-sharing-settings--heading-container{
   margin-bottom: ${tokens.spacingLarge};
}

 .data-sharing-settings--section-heading{
  margin-bottom: ${tokens.spacingXSmall};
  margin-top: ${tokens.spacingLarge};
 }

 .data-sharing-settings--row{
  display: flex;
   padding-top: 10px;
   justify-content: space-between;
   flex-direction: column;
 }

 .data-sharing-settings--section-row{
   display: flex;
   justify-content: flex-end;
   align-items: center;
 }

 .data-sharing-settings--text-wrapper{
  width: 80%;
 }

 .data-sharing-settings--content{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${tokens.spacing};
 }
`;


export default DataSharingSettings;
