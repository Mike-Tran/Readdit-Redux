import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import Upvote from 'material-ui-icons/KeyboardArrowUp';
import Downvote from 'material-ui-icons/KeyboardArrowDown';

import Avatar from 'material-ui/Avatar';
import {upVoteForPostId} from "./PostAction";



class PostContainer extends Component {
	upVotePost = () => {
		console.error("INSIDE", this.props.post.id)
		upVoteForPostId(this.props.post.id);
	};

	downVotePost = () => {
		// Downvote(this.props.post.id);
	};

	render() {
		const {voteScore, author, timestamp, title, body, commentCount, } = this.props.post;
		
		return (
			<div>
				<Card className='card'>
					<div className='cardHeader'>
						<div className='voteArea'>
							<div className='arrow-up'>
								<Upvote onClick={this.upVotePost} className='voteCursor'/>
							</div>
							<div className='totalscore'>
								{voteScore}
							</div>
							<div className='arrow-down'>
								<Downvote onClick={this.downVotePost} className='voteCursor'/>
							</div>
						</div>
						<CardHeader
							avatar={
								<Avatar className='avatar' aria-label="Recipe">
									R
								</Avatar>
							}
							title={author}
							subheader={timestamp}
						/>
					</div>
					<CardContent>
						<Typography type="headline" component="h2">
							{title}
						</Typography>
						<Typography component="p">
							{body}
						</Typography>
					</CardContent>
					<CardActions>
						<IconButton aria-label="Add to favorites">
							<FavoriteIcon/>
						</IconButton>
						<Button dense color="primary">
							{commentCount} Comments
						</Button>
						<Button dense color="primary">
							Edit
						</Button>
						<Button dense color="primary">
							Share
						</Button>
						<Button dense color="primary">
							Delete
						</Button>
					</CardActions>
				</Card>
			</div>
		)
	}
}

export default PostContainer;