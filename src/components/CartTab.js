import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CartCard from './CartCard';

function TopTab() {
  return (
    <Tabs
      defaultActiveKey="all"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="all" title="전체">
        <CartCard />
      </Tab>
      <Tab eventKey="smile" title="스마일배송">
        Tab content for Profile
      </Tab>
      <Tab eventKey="today" title="당일배송">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default TopTab;