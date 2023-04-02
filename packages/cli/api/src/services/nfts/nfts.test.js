import { nfts, nft, createNft, updateNft, deleteNft } from './nfts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('nfts', () => {
  scenario('returns all nfts', async (scenario) => {
    const result = await nfts()

    expect(result.length).toEqual(Object.keys(scenario.nft).length)
  })

  scenario('returns a single nft', async (scenario) => {
    const result = await nft({ id: scenario.nft.one.id })

    expect(result).toEqual(scenario.nft.one)
  })

  scenario('creates a nft', async () => {
    const result = await createNft({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a nft', async (scenario) => {
    const original = await nft({ id: scenario.nft.one.id })
    const result = await updateNft({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a nft', async (scenario) => {
    const original = await deleteNft({ id: scenario.nft.one.id })
    const result = await nft({ id: original.id })

    expect(result).toEqual(null)
  })
})
