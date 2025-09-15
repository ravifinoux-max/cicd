from app import add


def test_add_fn():
    assert add(1, 2) == 3
    assert add(1,3) == 6
