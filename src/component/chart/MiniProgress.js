import React from 'react';
import { Tooltip } from 'antd';
import './MiniProgress.less';

function MiniProgress(props) {
  const {
    targetLabel,
    target,
    color = 'rgb(19, 194, 194)',
    strokeWidth,
    percent,
  } = props;
  return (
    <div className="miniProgress" style={{ paddingTop: '20px' }}>
      <Tooltip title={targetLabel}>
        <div
          className="target"
          style={{ left: target ? `${target}%` : undefined }}
        >
          <span style={{ backgroundColor: color || undefined }} />
          <span style={{ backgroundColor: color || undefined }} />
        </div>
      </Tooltip>
      <div className="progressWrap">
        <div
          className="progress"
          style={{
            backgroundColor: color || undefined,
            width: percent ? `${percent}%` : undefined,
            height: strokeWidth || undefined,
          }}
        />
      </div>
    </div>
  );
}

export default MiniProgress;
