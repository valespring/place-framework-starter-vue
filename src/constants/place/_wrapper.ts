// Based on `$wrapper-name`

import { WRAPPER_NAME } from './_scss-variables';

interface WrapperConstants {
  CLASS_NAME: string;
}

const WRAPPER: WrapperConstants = {
  CLASS_NAME: WRAPPER_NAME
};

export default WRAPPER;