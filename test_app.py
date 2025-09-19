from .app import app
from fastapi.testclient import TestClient


client = TestClient(app)



def check_health_url():
    response = client.get('/health')
    assert response.status_code == 200
    assert response.json() == {"status": "success"}
