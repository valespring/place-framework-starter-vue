import BASE from './_base';
import VIEWPORTS from './_viewports';

interface PropDefinition {
  type: any;
  default: any;
}

interface PropsConstants {
  el: PropDefinition;
  viewports: PropDefinition;
}

const PROPS: PropsConstants = {
  el: {
    type: String,
    default: BASE.EL
  },
  viewports: {
    type: Array,
    default: [VIEWPORTS.LARGE, VIEWPORTS.MEDIUM, VIEWPORTS.SMALL]
  }
};

export default PROPS;