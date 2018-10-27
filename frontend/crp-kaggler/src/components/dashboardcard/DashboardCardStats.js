import React, {Component} from 'react';

import './card.css';

class DashboardCardStats extends Component {

    render() {
        return (
            <div className="card-stats">
                <div className="medium-title">Total Revenue (based on predictions)</div>
                <div className="large-font">
                   <i class="fas fa-dollar-sign currency"></i> {this.props.stats.totalValue}
                </div>
                
                <div className="medium-label">
                    {this.props.stats.relativeValue}% Higher
                </div>

                <div className="large-button">
                    <span className="btn-label"> View Details</span>   
                    <i class="fas fa-arrow-circle-right btn-icon"></i>
                </div>

            </div>
        );
    }
}

export default DashboardCardStats;