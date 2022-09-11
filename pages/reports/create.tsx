import React, { useState } from 'react';
import { Button, Col, Input, Select, Row, Typography } from 'antd';
import type { NextPage } from 'next';
import { AGE_LEVELS, STATES, FULL_WIDTH } from 'constants.js';
import { DefaultOptionType } from 'antd/lib/select';

const { TextArea } = Input;
const { Title } = Typography;

const stateOptions: Array<DefaultOptionType> = STATES.map((state) => ({
  label: state,
  value: state
}));

const ageLevelOptions: Array<DefaultOptionType> = AGE_LEVELS.map((ageLevel) => ({
  label: ageLevel,
  value: ageLevel
}));

const CreateReport: NextPage = () => {
  const [data, setData] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedAgeLevel, setSelectedAgeLevel] = useState<string | null>(null);
  const [summary, setSummary] = useState<string>('');

  const handleOnStateChange = (state: string) => {
    setSelectedState(state);
  };

  const handleOnAgeLevelChange = (ageLevel: string) => {
    setSelectedAgeLevel(ageLevel);
  };

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value);
  };

  // TODO This will need to change to call the actual API call to get the data
  // A loading indicator should be used here while the data is fetching.
  const handleStartBuildingClick = () => {
    setData('data here');
  };

  const hasSelectedInputsToBuild = selectedState && selectedAgeLevel;

  return (
    <Row wrap={true} gutter={[0, 16]}>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Title level={4}>1. Select state and age level</Title>
          </Col>
          <Col span={9}>
            <Select
              showSearch
              placeholder="Select a State"
              optionFilterProp="children"
              onChange={handleOnStateChange}
              options={stateOptions}
              style={FULL_WIDTH}
            />
          </Col>
          <Col span={9}>
            <Select
              showSearch
              placeholder="Select an Age Level"
              optionFilterProp="children"
              onChange={handleOnAgeLevelChange}
              options={ageLevelOptions}
              style={FULL_WIDTH}
            />
          </Col>
          {hasSelectedInputsToBuild ? (
            <Col span={6}>
              <Button type="primary" style={FULL_WIDTH} onClick={handleStartBuildingClick}>
                Start Building
              </Button>
            </Col>
          ) : null}
        </Row>
      </Col>
      {data ? (
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Title level={4}>2. Customize and analyze</Title>
            </Col>
            <Col span={12}>
              <Select
                showSearch
                placeholder="Opioid Variables"
                optionFilterProp="children"
                onChange={handleOnAgeLevelChange}
                options={ageLevelOptions}
                style={FULL_WIDTH}
              />
            </Col>
            <Col span={12}>
              <Select
                showSearch
                placeholder="Medicare Variables"
                optionFilterProp="children"
                onChange={handleOnAgeLevelChange}
                options={ageLevelOptions}
                style={FULL_WIDTH}
              />
            </Col>
            <Col span={12}>
              <TextArea rows={6} placeholder="Opioid Graph here" />
            </Col>
            <Col span={12}>
              <TextArea rows={6} placeholder="Medicare Graph here" />
            </Col>
          </Row>
        </Col>
      ) : null}
      {data ? (
        <Col span={24}>
          <TextArea rows={10} placeholder="pi charts here" />
        </Col>
      ) : null}
      {data ? (
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Title level={4}>3. Enter summary (optional)</Title>
            </Col>
            <Col span={24}>
              <TextArea rows={6} value={summary} onChange={handleSummaryChange} />
            </Col>
          </Row>
        </Col>
      ) : null}
      {data ? (
        <Col span={6} push={21}>
          <Button type="primary">Create Report</Button>
        </Col>
      ) : null}
    </Row>
  );
};

export default CreateReport;
