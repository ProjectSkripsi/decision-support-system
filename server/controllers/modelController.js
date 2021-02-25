const Model = require("../models/model");
const { learningConcept, convert } = require("../helpers/constant");

module.exports = {
  createModel: async (req, res) => {
    const {
      title,
      description,
      fileUrl,
      coverUrl,
      learningConcept,
      teacherExpertise,
      equivalenceModule,
      year,
      score,
      author,
      nasionalismContent,
    } = req.body.data;
    try {
      const response = await Model.create({
        title,
        description,
        fileUrl,
        coverUrl,
        learningConcept,
        teacherExpertise,
        equivalenceModule,
        year,
        score,
        author,
        nasionalismContent,
      });
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getModel: async (req, res) => {
    const { pageSize, currentPage } = req.params;
    const { search } = req.query;
    const skip =
      Number(currentPage) === 1
        ? 0
        : (Number(currentPage) - 1) * Number(pageSize);

    var findCondition = { deleteAt: null };
    if (search) {
      findCondition = {
        deleteAt: null,
        title: { $regex: new RegExp(search, "i") },
      };
    }

    try {
      const response = await Model.find(findCondition)
        .sort([["createdAt", "DESC"]])
        .limit(Number(pageSize) * 1)
        .skip(skip);
      const count = await Model.countDocuments(findCondition);
      res.status(200).json({
        currentPage,
        data: response,
        pageSize,
        status: true,
        totalItem: count,
        totalPage: Math.ceil(count / Number(pageSize)),
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getModelPublic: async (req, res) => {
    const { pageSize, currentPage } = req.params;
    const { search } = req.query;
    const skip =
      Number(currentPage) === 1
        ? 0
        : (Number(currentPage) - 1) * Number(pageSize);

    var findCondition = { deleteAt: null };
    if (search) {
      findCondition = {
        deleteAt: null,
        title: { $regex: new RegExp(search, "i") },
      };
    }

    try {
      const response = await Model.find(findCondition)
        .sort([["createdAt", "DESC"]])
        .limit(Number(pageSize) * 1)
        .skip(skip);
      const count = await Model.countDocuments(findCondition);
      res.status(200).json({
        currentPage,
        data: response,
        pageSize,
        status: true,
        totalItem: count,
        totalPage: Math.ceil(count / Number(pageSize)),
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  publishModel: async (req, res) => {
    try {
      const { id, type } = req.params;
      const isType = type === "publish";
      const response = await Model.updateOne(
        {
          _id: id,
        },
        {
          isPublish: isType,
        }
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteModel: async (req, res) => {
    try {
      const { ids } = req.body;
      const response = await Model.updateMany(
        { _id: { $in: ids } },
        { $set: { deleteAt: Date.now() } },
        { multi: true }
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getModelById: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await Model.findById({ _id: id });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAnyModel: async (req, res) => {
    try {
      const response = await Model.aggregate([
        { $match: { deleteAt: null } },
        { $sample: { size: 6 } },
      ]);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateModel: async (req, res) => {
    const { id } = req.params;
    const {
      title,
      description,
      fileUrl,
      coverUrl,
      learningConcept,
      teacherExpertise,
      equivalenceModule,
      year,
      score,
      author,
      nasionalismContent,
    } = req.body;

    try {
      const response = await Model.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          title,
          description,
          fileUrl,
          coverUrl,
          learningConcept,
          teacherExpertise,
          equivalenceModule,
          year,
          score,
          author,
          nasionalismContent,
        },
        {
          returnOriginal: false,
        }
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  onDownload: async (req, res) => {
    try {
      const response = await Model.findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        {
          $inc: {
            download: 1,
          },
        },
        {
          returnOriginal: false,
        }
      );

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getRecomendations: async (req, res) => {
    const { pageSize, currentPage } = req.params;
    const { search } = req.query;
    var findCondition = { deleteAt: null };
    if (search) {
      findCondition = {
        deleteAt: null,
        title: { $regex: new RegExp(search, "i") },
      };
    }

    if (Number(currentPage) === 0) {
      res.status(200).json({
        currentPage,
        data: [],
        pageSize,
        status: true,
        totalItem: 0,
        totalPage: 0,
      });
    } else {
      const skip =
        Number(currentPage) === 1
          ? 0
          : (Number(currentPage) - 1) * Number(pageSize);
      try {
        const result = await Model.find(findCondition)
          .limit(Number(pageSize) * 1)
          .skip(skip);
        let temp = result;
        temp.forEach(function (item) {
          item.v1 = convert(item.equivalenceModule);
          item.v2 = convert(item.teacherExpertise);
          item.v3 = Number(item.nasionalismContent);
          item.v4 = learningConcept(item.learningConcept);
          item.v5 = Number(item.score);
        });

        let a = [];
        temp.forEach((item, i) => {
          a[i] = [item.v1, item.v2, item.v3, item.v4, item.v5, item._id];
        });

        let tV1 = 0;
        let tV2 = 0;
        let tV3 = 0;
        let tV4 = 0;
        let tV5 = 0;

        a.forEach((item, index) => {
          tV1 = tV1 + Math.pow(item[0], 2);
          tV2 = tV2 + Math.pow(item[1], 2);
          tV3 = tV3 + Math.pow(item[2], 2);
          tV4 = tV4 + Math.pow(item[3], 2);
          tV5 = tV5 + Math.pow(item[4], 2);
        });

        const totalV1 = Number(Math.sqrt(tV1).toFixed(2));
        const totalV2 = Number(Math.sqrt(tV2).toFixed(2));
        const totalV3 = Number(Math.sqrt(tV3).toFixed(2));
        const totalV4 = Number(Math.sqrt(tV4).toFixed(2));
        const totalV5 = Number(Math.sqrt(tV5).toFixed(2));

        let b = [];
        let minMax = {
          0: {
            min: 0,
            max: 0,
          },
          1: {
            min: 0,
            max: 0,
          },
          2: {
            min: 0,
            max: 0,
          },
          3: {
            min: 0,
            max: 0,
          },
          4: {
            min: 0,
            max: 0,
          },
        };
        a.forEach((item, i) => {
          let c = [];

          item.forEach((a, index) => {
            if (index === 0) {
              const idx1 = (Number(a) / totalV1).toFixed(2);
              c.push(idx1);
              const val1 = Number(idx1);
              if (val1 > minMax[index].max) {
                minMax[index].max = val1;
              }
              if (minMax[index].min === 0) {
                minMax[index].min = val1;
              }
              if (val1 < minMax[index].min) {
                minMax[index].min = val1;
              }
            } else if (index === 1) {
              const idx2 = (Number(a) / totalV2).toFixed(2);
              c.push(idx2);
              const val2 = Number(idx2);
              if (val2 > minMax[index].max) {
                minMax[index].max = val2;
              }
              if (minMax[index].min === 0) {
                minMax[index].min = val2;
              }
              if (val2 < minMax[index].min) {
                minMax[index].min = val2;
              }
            } else if (index === 2) {
              const idx3 = (Number(a) / totalV3).toFixed(2);
              c.push(idx3);
              const val3 = Number(idx3);
              if (val3 > minMax[index].max) {
                minMax[index].max = val3;
              }
              if (minMax[index].min === 0) {
                minMax[index].min = val3;
              }
              if (val3 < minMax[index].min) {
                minMax[index].min = val3;
              }
            } else if (index === 3) {
              const idx4 = (Number(a) / totalV4).toFixed(2);
              c.push(idx4);
              const val4 = Number(idx4);
              if (val4 > minMax[index].max) {
                minMax[index].max = val4;
              }
              if (minMax[index].min === 0) {
                minMax[index].min = val4;
              }
              if (val4 < minMax[index].min) {
                minMax[index].min = val4;
              }
            } else if (index === 4) {
              const idx5 = (Number(a) / totalV5).toFixed(2);
              c.push(idx5);
              const val5 = Number(idx5);
              if (val5 > minMax[index].max) {
                minMax[index].max = val5;
              }
              if (minMax[index].min === 0) {
                minMax[index].min = val5;
              }
              if (val5 < minMax[index].min) {
                minMax[index].min = val5;
              }
            }
            // else if (index === 5) {
            //   c.push(a);
            // }
          });
          b[i] = c;
        });

        let dPlus = [];
        let dMin = [];
        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue;
        b.forEach((c, idx) => {
          const temp = [];
          const tempMin = [];
          c.forEach((item, i) => {
            let dTambah = Number(item) - minMax[i].max;
            let dKurang = Number(item) - minMax[i].min;
            let dTambahTemp = Math.pow(dTambah, 2).toFixed(2);
            let dKurangTemp = Math.pow(dKurang, 2).toFixed(2);
            temp.push(Number(dTambahTemp));
            tempMin.push(Number(dKurangTemp));
          });

          dPlus[idx] = Math.sqrt(temp.reduce(reducer)).toFixed(2);
          dMin[idx] = Math.sqrt(tempMin.reduce(reducer)).toFixed(2);
        });

        let topsis = [];
        dPlus.forEach((item, idx) => {
          let total = Number(item) / (Number(item) + Number(dMin[idx])) || 0;
          let newTot = total.toFixed(2);
          topsis.push({
            "D+": item,
            "D-": dMin[idx],
            topsis: total.toFixed(2),
          });
        });

        let newData = result;
        let newTemp = [];
        for (let i = 0; i < newData.length; i++) {
          newTemp.push({
            _id: newData[i]._id,
            title: newData[i].title,
            author: newData[i].author,
            coverUrl: newData[i].coverUrl,
            createdAt: newData[i].createdAt,
            description: newData[i].description,
            download: newData[i].download,
            equivalenceModule: newData[i].equivalenceModule,
            fileUrl: newData[i].fileUrl,
            isPublish: newData[i].isPublish,
            learningConcept: newData[i].learningConcept,
            nasionalismContent: newData[i].nasionalismContent,
            score: newData[i].score,
            teacherExpertise: newData[i].teacherExpertise,
            year: newData[i].year,
            topsis: topsis[i],
          });
        }
        newTemp.sort((a, b) => (a.topsis.topsis < b.topsis.topsis ? 1 : -1));

        const count = await Model.countDocuments(findCondition);
        res.status(200).json({
          currentPage,
          data: newTemp,
          pageSize,
          status: true,
          totalItem: count,
          totalPage: Math.ceil(count / Number(pageSize)),
        });
      } catch (error) {
        res.status(500).json(error);
      }
    }
  },
};
