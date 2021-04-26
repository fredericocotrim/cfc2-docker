package model

type Chapter struct {
	ID          string    `json:"id"`
	Name        string    `json:"name"`
	Description *string   `json:"description"`
	Course      *Course   `json:"course"`
	Category    *Category `json:"category"`
}
