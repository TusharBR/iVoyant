// Performance,Security,Documentation,Testing

// performance,security,documentation,testing
const [performanceState,setperformanceState]
<div className="pa-10 w-300 card">
<h2>Performance</h2>
<div className="flex my-30 mx-0 justify-content-around">
  <button className="py-10 px-15" data-testid="upvote-btn-1" onClick={() => 
    setperformanceState(prevState => ({
      ...prevState,
      upVote: prevState.upVote + 1
    }))
  }
>
    👍 Upvote
  </button>
  <button className="py-10 px-15 danger" data-testid="downvote-btn-1" onClick={() => 
    setperformanceState(prevState => ({
      ...prevState,
      upVote: prevState.upVote + 1
    }))
  }
>
    👎 Downvote
  </button>
</div>
<p className="my-10 mx-0" data-testid="upvote-count-1">
  Upvotes: <strong>{erformanceState.upVote}</strong>
</p>
<p className="my-10 mx-0" data-testid="downvote-count-1">
  Downvotes: <strong>{erformanceState.downVote}</strong>
</p>
</div>