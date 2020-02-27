//-- MenuComponent.js --
import React, { Component } from "react";
//import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class DishDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedDish: this.props.selectedDish,
			comments: this.props.comments
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (
			props.selectedDish !== state.selectedDish ||
			props.comments !== state.comments
		) {
			return {
				selectedDish: props.selectedDish,
				comments: props.comments
			};
		}
		return null;
	}

	renderComments(comments) {
		if (comments != null) {
			const listedComments = comments.map(comment => {
				return (
					<div key={comment.id} width="100%">
						<ul className="list-unstyled">
							<p>
								<li>{comment.comment}</li>
							</p>
							<p>
								<li>
									-- {comment.author} , {comment.date}
								</li>
							</p>
						</ul>
					</div>
				);
			});
			return (
				<div>
					<div>
						<h4>Comments</h4>
					</div>
					<div>{listedComments}</div>
				</div>
			);
		} else {
			return <div></div>;
		}
	}

	render() {
		const dish = this.state.selectedDish;
		const comments = this.state.comments;
		if (comments != null) {
			return (
				<React.Fragment>
					{this.renderComments(comments)}
				</React.Fragment>
			);
		} else if (dish != null) {
			return (
				<React.Fragment>
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</React.Fragment>
			);
		} else return <div></div>;
	}
}

export default DishDetail;
