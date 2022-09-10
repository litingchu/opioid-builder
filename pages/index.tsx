import type { NextPage } from 'next';
import { Typography } from 'antd';
import { ReportCard } from 'components/ReportCard';

const { Paragraph } = Typography;

const Home: NextPage = () => {
  return (
    <div>
      <Paragraph>
        This will be the home page. When we get to creating reports, this should have each report as
        a card like below:
      </Paragraph>
      <ReportCard name="Fake Report" summary="This is a fake report" />
    </div>
  );
};

export default Home;
