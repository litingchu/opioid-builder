import React, { useState } from 'react';
import Image from 'next/image';
import { Col, Typography, Row, Space } from 'antd';
import { useRouter } from 'next/router';

// TODO this will probably be replaced with a type from Prisma, just leaving it here for now
const { Title, Text } = Typography;
type Report = {
  reportName: string;
  reportSummary: string;
  state: string;
  ageLevel: string;
  opioidGraphUrl: string;
  medicareGraphUrl: string;
};

const Report = () => {
  const router = useRouter();
  // Need to use this to set report and set type to be Report | null
  const [report, setReport] = useState<Report>({
    reportName: 'fakeReportName',
    reportSummary: 'fakeSummary',
    state: 'Alaska',
    ageLevel: 'All',
    opioidGraphUrl: '',
    medicareGraphUrl: ''
  });
  // Need to use this to get the data.
  const { reportId } = router.query;

  const { reportName, reportSummary, state, ageLevel, opioidGraphUrl, medicareGraphUrl } = report;
  return (
    <Row>
      <Col span={24}>
        <Title level={3}>Report Name: {reportName}</Title>
      </Col>
      <Col span={24}>
        <Space direction="vertical">
          <Title level={3}>State: {state}</Title>
          <Title level={3}>Age Level: {ageLevel}</Title>
        </Space>
      </Col>
      <Col span={24}>
        <Space direction="vertical">
          <Title level={3}>Summary:</Title>
          <Text>{reportSummary}</Text>
        </Space>
      </Col>
      <Col span={24}>
        <Image src={opioidGraphUrl} alt="Graph of opioid rates" />
      </Col>
      <Col span={24}>
        <Image src={medicareGraphUrl} alt="Graph of medicare" />
      </Col>
    </Row>
  );
};

export default Report;
