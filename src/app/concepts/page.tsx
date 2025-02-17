"use client";
import React, { JSX,  } from 'react';
import { Tabs, Typography } from 'antd';
import UseTransitionExample from '@/components/concepts/useTransition';
import UseOptimisticExample from '@/components/concepts/useOptimistic';
import UseFormStatusExample from '@/components/concepts/useFormStatus';

const { Title } = Typography;
const { TabPane } = Tabs;
const hooks = ['useTransition', 'useOptimistic', 'useFormStatus',];

const TabComponents: Record<string, JSX.Element> = {

  useTransition:<UseTransitionExample />,
  useOptimistic: <UseOptimisticExample/>,
  useFormStatus: <UseFormStatusExample/>,
  
};

const Concepts: React.FC = () => {
  return (
    <div style={{margin:'auto',width:'95vw'}} >
      <Title>Best Practices</Title>
      <Tabs defaultActiveKey="useTransition">
        {hooks.map((hook) => (
          <TabPane tab={hook} key={hook}>
            {TabComponents[hook] || <div>No content available</div>}         
            
          </TabPane>
        ))}
      
      </Tabs>
    </div>
  );
};

export default Concepts;
