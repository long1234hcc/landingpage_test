from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from sqlalchemy import or_
from typing import List

import models
import schemas
from database import engine, get_db, SessionLocal


models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Water Infrastructure Projects API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# @app.on_event("startup")
# def seed_database():
#     db = next(get_db())
#     if db.query(models.Project).count() == 0:
#         sample_projects = [
#             models.Project(name="Aqua Pure Reservoir", location="California, USA", description="A major reservoir project to store and purify rainwater for urban use.", status="Completed", image_url="https://images.unsplash.com/photo-1542261625-72847c2b4d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Coastal Desalination Plant", location="Sydney, Australia", description="State-of-the-art facility converting seawater to drinking water using RO technology.", status="In Progress", image_url="https://images.unsplash.com/photo-1596763428987-19ce7430d4a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="River Thames Barrier UP", location="London, UK", description="Upgrade to the existing flood defense system protecting central London.", status="Planning", image_url="https://images.unsplash.com/photo-1596395819057-e37f55a8516d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Sahara Aquifer Tap", location="North Africa", description="Deep drilling project to access ancient water reserves for agriculture.", status="In Progress", image_url="https://images.unsplash.com/photo-1500329437166-5e04ef7a3546?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Tokyo Underground Cistern", location="Tokyo, Japan", description="Massive underground chambers to prevent urban flooding during typhoons.", status="Completed", image_url="https://images.unsplash.com/photo-1605380126756-3a7cb1d1b32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Amazon River Basin Monitoring", location="Brazil", description="Network of sensors to monitor water quality and flow in the Amazon basin.", status="Completed", image_url="https://images.unsplash.com/photo-1610488219438-e4b2d41fc76a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Greenland Glacier Melt Pipeline", location="Greenland", description="Experimental project to capture and transport pure glacier meltwater.", status="Planning", image_url="https://images.unsplash.com/photo-1510250626084-3f305a41505c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Singapore NEWater Expansion", location="Singapore", description="Expanding the highly successful wastewater reclamation initiative.", status="In Progress", image_url="https://images.unsplash.com/photo-1549214717-31627c00e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Rhine River Restoraton", location="Germany/France", description="Restoring natural floodplains to improve water ecology and flood protection.", status="Completed", image_url="https://images.unsplash.com/photo-1469503463777-74271dbef59b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Las Vegas Pipeline Shield", location="Nevada, USA", description="Upgrading water transit lines from Lake Mead to reduce evaporation.", status="In Progress", image_url="https://images.unsplash.com/photo-1516086884698-543cb8d9ec76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Ganges Clean Water Drive", location="India", description="Massive initiative to purify and treat wastewater entering the Ganges.", status="In Progress", image_url="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Nile Delta Irrigation Grid", location="Egypt", description="Smart irrigation mapping to optimize water usage in agricultural sectors.", status="Completed", image_url="https://images.unsplash.com/photo-1428581754024-af8c5bb7af0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Venice MOSE System", location="Venice, Italy", description="Mobile gates to protect the city from high tides and flooding.", status="Completed", image_url="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Cape Town Aquifer Recharge", location="South Africa", description="Pumping treated water back into underground aquifers to prevent Day Zero.", status="Planning", image_url="https://images.unsplash.com/photo-1542152063-8a30364f331d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"),
#             models.Project(name="Nordic Geothermal Water Heating", location="Iceland", description="Utilizing geothermal energy for municipal water heating systems.", status="Completed", image_url="https://images.unsplash.com/photo-1520677558667-bb71d79198b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")
#         ]
#         db.add_all(sample_projects)
#         db.commit()


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
    project = db.query(models.Project).filter(
        models.Project.id == project_id).first()
    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return project


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
