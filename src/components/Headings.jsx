import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const propTypes = {
  Color: PropTypes.string,
  children: PropTypes.any,
  FontSize: PropTypes.string,
  FontStyle: PropTypes.string,
  FontWeight: PropTypes.string,
  FontFamily: PropTypes.string,
  LineHeight: PropTypes.string,
};

const defaultProps = {
  Color: 'inherit',
  FontWeight: 'bold',
};

const baseHeadingStyles = css`
  color: ${({ Color }) => Color};
  line-height: ${({ LineHeight }) => LineHeight};
  font-family: ${({ FontFamily }) => FontFamily};
  font-weight: ${({ FontWeight }) => FontWeight || 'bold'};
  font-style: ${({ FontStyle }) => FontStyle};
`;

const H1 = styled.h1`
  ${baseHeadingStyles}
  font-size: ${({ FontSize }) => FontSize || '2rem'};
`;

const H2 = styled.h2`
  ${baseHeadingStyles}
    font-size: ${({ FontSize }) => FontSize || '1.5rem'};
`;

const H3 = styled.h3`
  ${baseHeadingStyles}
  font-size: ${({ FontSize }) => FontSize || '1.25rem'};
`;

const H4 = styled.h4`
  ${baseHeadingStyles}
  font-size: ${({ FontSize }) => FontSize || '1.125rem'};
`;

const H5 = styled.h5`
  ${baseHeadingStyles}
  font-size: ${({ FontSize }) => FontSize || '0.875rem'};
`;

const H6 = styled.h6`
  ${baseHeadingStyles}
  font-size: ${({ FontSize }) => FontSize || '0.75rem'};
`;

baseHeadingStyles.propTypes = propTypes;

baseHeadingStyles.defaultProps = defaultProps;

export { H1, H2, H3, H4, H5, H6 };
