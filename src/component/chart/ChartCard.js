import React from 'react';
import { Card } from 'antd';
import './ChartCard.less';

function ChartCard(props) {
  const renderContent = () => {
    const {
      contentHeight,
      title,
      avatar,
      action,
      total,
      footer,
      children,
      loading,
    } = props;

    return (
      <div className="chartCard">
        <div className="chartTop">
          <div className="avatar">{avatar}</div>
          <div className="metaWrap">
            <div className="meta">
              <span className="title">{title}</span>
              <span className="action">{action}</span>
            </div>
            <div className="total">{total}</div>
          </div>
        </div>
        {children && (
          <div className="content" style={{ height: contentHeight || 'auto' }}>
            <div className="contentHeight">{children}</div>
          </div>
        )}
        {footer && <div className="footer">{footer}</div>}
      </div>
    );
  };
  return (
    <Card loading={false} bodyStyle={{ padding: '20px 24px 8px 24px' }}>
      {renderContent()}
    </Card>
  );
}

export default ChartCard;
