package graph

import "github.com/fredericocotrim/curso-full-cycle-2.0/graph/model"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct{
	Categories []*model.Category
	Courses []*model.Course
	Chapters []*model.Chapter
}
