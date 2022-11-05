//首页--发布的物品
import React, { useState, useEffect } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';
import '../assets/css/PublishItem.css';
import show_1 from '../assets/images/show (1).jpg';


function PublishItem(props) {
    const [PublishItemComponent, setPublishItemComponent] = useState('');//把Search的值存起来，方便其他地方用;

    // useEffect(() => {
    //     });
    
  return (
    <div className="product">
		<ul>
			<li>
				<div className="pro-img">
					<a href="#">
						<img src={show_1} alt=""></img>
					</a>
				</div>
				<h3><a href="#">美丽包包</a></h3>
				<p className="desc">八成新</p>
				<p className="price">
					<span>50</span>元
					<del>100</del>
				</p>
				<div className="review">
					<a href="#">
						<span className="msg">"考虑讲价"</span>
						<span className="auther"> ——卖主小白 </span>
					</a>
				</div>
			</li>
		</ul>
	</div>

  );
}


export default PublishItem;
