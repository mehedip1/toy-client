import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Category.css'

const Category = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold text-center'>Some Category items </h2>
              <section>
        <Tabs >
        <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
      <Tab>Title 3</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
      </Tabs>
              </section>
        </div>
    );
};

export default Category;
