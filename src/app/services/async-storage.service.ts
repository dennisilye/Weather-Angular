export const storageService = {
  query,
  get,
  _save,
};

interface Entity {
  id?: string;
}

async function query(entityType: string, delay = 1000): Promise<Entity[]> {
  var entities = JSON.parse(localStorage.getItem(entityType) || 'null') || [];
  if (delay) {
    return new Promise((resolve) => setTimeout(resolve, delay, entities));
  }
  return entities;
}

async function get(entityType: string, entityId: string): Promise<Entity> {
  const entities = await query(entityType);
  const entity = entities.find((entity) => entity.id === entityId);
  if (!entity)
    throw new Error(
      `Cannot get, Item ${entityId} of type: ${entityType} does not exist`
    );
  return entity;
}

function _save(entityType: string, entities: Entity[]) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}
