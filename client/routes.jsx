FlowRouter.route('/', {
	action() {
		ReactLayout.render(Layout, {content: <BlogOverviewContainer />});
	}
});

FlowRouter.route('/new-post', {
	action() {
		ReactLayout.render(Layout, {content: <NewPostContainer />});
	}
});

FlowRouter.route('/post/:postId', {
	action(params) {
		ReactLayout.render(Layout, {content: <BlogPostContainer {...params} />});
	}
});

FlowRouter.route('/authors', {
	action() {
		ReactLayout.render(Layout, {content: <AuthorsOverviewContainer />});
	}
});

FlowRouter.route('/authors/:id', {
	action(params) {
		ReactLayout.render(Layout, {content: <AuthorPageContainer {...params} />});
	}
});
