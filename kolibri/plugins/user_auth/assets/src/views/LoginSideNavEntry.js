import { UserKinds, NavComponentSections } from 'kolibri.coreVue.vuex.constants';
import navComponents from 'kolibri.utils.navComponents';
import urls from 'kolibri.urls';
import coreStrings from 'kolibri.utils.coreStrings';

const component = {
  name: 'LoginSideNavEntry',
  get url() {
    return urls['kolibri:kolibri.plugins.user_auth:user_auth']();
  },
  get label() {
    return coreStrings.$tr('signIn');
  },
  icon: 'login',
  role: UserKinds.ANONYMOUS,
  priority: 10,
  section: NavComponentSections.ACCOUNT,
};

navComponents.register(component);

export default component;
