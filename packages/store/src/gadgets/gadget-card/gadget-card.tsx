import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import { GadgetCardProps } from './gadget-card.type';
import { cardStyles, imageStyles } from './gadget-card.styles';

export const GadgetCard = ({ images, modelName, id, price }: GadgetCardProps) => (
  <Link className={cardStyles} to={`/${id}`}>
    <img className={imageStyles} src={images} alt="" />
    <Typography.Title level={5}>{modelName}</Typography.Title>
    <Typography.Text>{price}</Typography.Text>
  </Link>
);
