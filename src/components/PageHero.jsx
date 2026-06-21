import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ breadcrumb, eyebrow, title, lead }) {
  return (
    <div className="page-hero">
      <div className="wrap">
        {breadcrumb && (
          <div className="breadcrumb">
            {breadcrumb.map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="sep">/</span>}
                {item.href ? (
                  <Link to={item.href}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {lead && <p className="lead">{lead}</p>}
      </div>
    </div>
  );
}
