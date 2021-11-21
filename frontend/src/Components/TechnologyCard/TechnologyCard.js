import * as React from 'react';
import './TechnologyCard.css';

function TechnologyCard() {
    return (
        <div className="techcard-container">
            <div className="techcard">
                <img src="https://www.svgrepo.com/show/213370/browser.svg" alt="img" />
                <div className="technology-info">
                    <p className="technology-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nobis nam quaerat
                        soluta ipsam repudiandae cumque. Impedit quisquam quidem laboriosam, quam sunt
                        architecto numquam placeat iusto, obcaecati, vel fugit blanditiis?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TechnologyCard;
