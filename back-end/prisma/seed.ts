import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const regions = [
    {name: 'Parangaba'},
    {name: 'Vila Peri'},
    {name: 'Novo Mondubim'},
    {name: 'Parque São José'},
    {name: 'Manoel Sátiro'},
    {name: 'Conjunto Esperança'},
    {name: 'Parque Santa Rosa'},
    {name: 'Parque Presidente Vargas'},
    {name: 'Canindezinho'},
    {name: 'Bom Jardim'}
]

async function main() {
    await createRegions();
};

async function createRegions() {
    for(const region of regions){
        await prisma.regions.upsert({
            where:{name:region.name},
            update:region,
            create:region
        })
    }
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });