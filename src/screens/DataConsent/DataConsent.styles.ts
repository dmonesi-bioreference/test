import styled from 'styled-components';

import { colors, tokens } from 'styles'

const DataConsentStyledDiv = styled.div`
.data{
    height: ${tokens.spacingSmall};
    margin: 7px;
    border-radius: ${tokens.borderRadius};
    width: 56px;
}
.data--row{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.data__tag--medium{
    width: 65px;
}

.data__tag--short{
    width: 40px;
}
.data__tag--long{
    width: 75px;
}

.data__ellipse{
    width: ${tokens.spacingXLarge};
    height: ${tokens.spacingXLarge};
    border-radius: ${tokens.borderRadiusCircle};
    margin: ${tokens.spacingXxSmall};
}

.data-consent--mask_data_background{
    background-color: ${colors.grey[400]};
}

.data__preview-card{
    padding:${tokens.spacing} ${tokens.spacingLarge};
    background-color: ${colors.grey[100]};
    border-radius:${tokens.borderRadius};
}
`

export default DataConsentStyledDiv
