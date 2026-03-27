from fastapi import FastAPI, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from sqlalchemy import or_
from typing import List

import models
import schemas
from database import engine, get_db, SessionLocal


models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Water Infrastructure Projects API")

from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def seed_database():
    # Tự tạo một session riêng biệt cho việc startup
    db = SessionLocal() 
    try:
        if db.query(models.Project).count() == 0:
        sample_projects = [
            models.Project(name="Aqua Pure Reservoir", location="California, USA", description="A major reservoir project to store and purify rainwater for urban use.", status="Completed", image_url="/water_imgs/demo_1.jpg"),
            models.Project(name="Coastal Desalination Plant", location="Sydney, Australia", description="State-of-the-art facility converting seawater to drinking water using RO technology.", status="In Progress", image_url="/water_imgs/demo_2.jpg"),
            models.Project(name="River Thames Barrier UP", location="London, UK", description="Upgrade to the existing flood defense system protecting central London.", status="Planning", image_url="/water_imgs/demo_3.jpg"),
            models.Project(name="Sahara Aquifer Tap", location="North Africa", description="Deep drilling project to access ancient water reserves for agriculture.", status="In Progress", image_url="/water_imgs/demo_4.jpg"),
            models.Project(name="Tokyo Underground Cistern", location="Tokyo, Japan", description="Massive underground chambers to prevent urban flooding during typhoons.", status="Completed", image_url="/water_imgs/demo_5.jpg"),
            models.Project(name="Amazon River Basin Monitoring", location="Brazil", description="Network of sensors to monitor water quality and flow in the Amazon basin.", status="Completed", image_url="/water_imgs/demo_6.jpg"),   
            models.Project(name="Greenland Glacier Melt Pipeline", location="Greenland", description="Experimental project to capture and transport pure glacier meltwater.", status="Planning", image_url="/water_imgs/demo_7.jpg"),
            models.Project(name="Singapore NEWater Expansion", location="Singapore", description="Expanding the highly successful wastewater reclamation initiative.", status="In Progress", image_url="/water_imgs/demo_8.jpg"),
        ]
            db.add_all(sample_projects)
            db.commit()
    finally:
        # Đảm bảo 100% kết nối sẽ được đóng và trả lại vào Pool
        db.close()


@app.get("/api/projects", response_model=List[schemas.ProjectResponse])
def get_projects(search: str = Query(None, description="Search by name or location"), db: Session = Depends(get_db)):
    query = db.query(models.Project)
    if search:
        search_filter = f"%{search}%"
        query = query.filter(
            or_(
                models.Project.name.ilike(search_filter),
                models.Project.location.ilike(search_filter)
            )
        )
    return query.all()

@app.get("/api/projects/{project_id}", response_model=schemas.ProjectResponse)
def get_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(models.Project).filter(models.Project.id == project_id).first()
    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
