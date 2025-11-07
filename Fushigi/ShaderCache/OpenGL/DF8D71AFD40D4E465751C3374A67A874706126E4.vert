#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;
layout (location = 10) out vec4 out_attr10;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    int temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    int temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    int temp_151;
    uint temp_152;
    uint temp_153;
    int temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    int temp_159;
    uint temp_160;
    uint temp_161;
    int temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    int temp_171;
    uint temp_172;
    uint temp_173;
    int temp_174;
    precise float temp_175;
    int temp_176;
    uint temp_177;
    int temp_178;
    precise float temp_179;
    precise float temp_180;
    int temp_181;
    uint temp_182;
    uint temp_183;
    int temp_184;
    precise float temp_185;
    int temp_186;
    uint temp_187;
    int temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C9807980CC70000 Mov
    // 0x000010: 0xEFD87F800807FF0F Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4C9807980CD70001 Mov
    // 0x000028: 0xEFD87F800847FF10 Ald
    temp_1 = in_attr0.y;
    // 0x000030: 0x4C6810180CC70000 Fmul
    temp_2 = vp_c6.data[51].x * vp_c6.data[51].x;
    // 0x000038: 0xEFD87F800887FF11 Ald
    temp_3 = in_attr0.z;
    // 0x000048: 0x49A000180CD70100 Ffma
    temp_4 = fma(vp_c6.data[51].y, vp_c6.data[51].y, temp_2);
    // 0x000050: 0xEFD87F801407FF02 Ald
    temp_5 = in_attr12.x;
    // 0x000058: 0x4C9807980CE70001 Mov
    // 0x000068: 0xEFD87F801447FF12 Ald
    temp_6 = in_attr12.y;
    // 0x000070: 0x49A000180CE70104 Ffma
    temp_7 = fma(vp_c6.data[51].z, vp_c6.data[51].z, temp_4);
    // 0x000078: 0xEFD87F801487FF0E Ald
    temp_8 = in_attr12.z;
    // 0x000088: 0x4C68101000470F01 Fmul
    temp_9 = temp_0 * vp_c4.data[1].x;
    // 0x000090: 0x5080000000570404 Mufu
    temp_10 = inversesqrt(temp_7);
    // 0x000098: 0x4C68101000070F03 Fmul
    temp_11 = temp_0 * vp_c4.data[0].x;
    // 0x0000A8: 0xEFD87F801047FF14 Ald
    temp_12 = in_attr8.y;
    // 0x0000B0: 0x49A0009000571000 Ffma
    temp_13 = fma(temp_1, vp_c4.data[1].y, temp_9);
    // 0x0000B8: 0x49A0019000171006 Ffma
    temp_14 = fma(temp_1, vp_c4.data[0].y, temp_11);
    // 0x0000C8: 0x4C68101000870F03 Fmul
    temp_15 = temp_0 * vp_c4.data[2].x;
    // 0x0000D0: 0x49A0001000671100 Ffma
    temp_16 = fma(temp_3, vp_c4.data[1].z, temp_13);
    // 0x0000D8: 0x4C6810180CC70408 Fmul
    temp_17 = temp_10 * vp_c6.data[51].x;
    // 0x0000E8: 0x49A0031000271106 Ffma
    temp_18 = fma(temp_3, vp_c4.data[0].z, temp_14);
    // 0x0000F0: 0x49A0019000971003 Ffma
    temp_19 = fma(temp_1, vp_c4.data[2].y, temp_15);
    // 0x0000F8: 0x4C6810180CE70407 Fmul
    temp_20 = temp_10 * vp_c6.data[51].z;
    // 0x000108: 0x4C68101000870209 Fmul
    temp_21 = temp_5 * vp_c4.data[2].x;
    // 0x000110: 0x4C58101000770001 Fadd
    temp_22 = temp_16 + vp_c4.data[1].w;
    // 0x000118: 0x49A104180CF70805 Ffma
    temp_23 = 0.0 - vp_c6.data[51].w;
    temp_24 = fma(temp_17, temp_23, temp_17);
    // 0x000128: 0x4C58101000370600 Fadd
    temp_25 = temp_18 + vp_c4.data[0].w;
    // 0x000130: 0x49A0019000A71103 Ffma
    temp_26 = fma(temp_3, vp_c4.data[2].z, temp_19);
    // 0x000138: 0x49A103980CF70706 Ffma
    temp_27 = 0.0 - vp_c6.data[51].w;
    temp_28 = fma(temp_20, temp_27, temp_20);
    // 0x000148: 0x49A0049000971209 Ffma
    temp_29 = fma(temp_6, vp_c4.data[2].y, temp_21);
    // 0x000150: 0x4C6810140967010A Fmul
    temp_30 = temp_22 * vp_c5.data[37].z;
    // 0x000158: 0x1E23DCCCCCD7050B Fmul32i
    temp_31 = temp_24 * 0.100000001;
    // 0x000168: 0x4C68101000470205 Fmul
    temp_32 = temp_5 * vp_c4.data[1].x;
    // 0x000170: 0x4C6810180CD70404 Fmul
    temp_33 = temp_10 * vp_c6.data[51].y;
    // 0x000178: 0x5C58300000E71111 Fadd
    temp_34 = 0.0 - temp_8;
    temp_35 = temp_3 + temp_34;
    // 0x000188: 0x49A0049000A70E09 Ffma
    temp_36 = fma(temp_8, vp_c4.data[2].z, temp_29);
    // 0x000190: 0x59A1050000B7000C Ffma
    temp_37 = 0.0 - temp_31;
    temp_38 = fma(temp_25, temp_37, temp_30);
    // 0x000198: 0x4C58101000B7030A Fadd
    temp_39 = temp_26 + vp_c4.data[2].w;
    // 0x0001A8: 0x4C68101000070203 Fmul
    temp_40 = temp_5 * vp_c4.data[0].x;
    // 0x0001B0: 0x1E23DCCCCCD7060B Fmul32i
    temp_41 = temp_28 * 0.100000001;
    // 0x0001B8: 0x49A0029000571205 Ffma
    temp_42 = fma(temp_6, vp_c4.data[1].y, temp_32);
    // 0x0001C8: 0x49A0019000171203 Ffma
    temp_43 = fma(temp_6, vp_c4.data[0].y, temp_40);
    // 0x0001D0: 0x59A0060000B70A0B Ffma
    temp_44 = fma(temp_39, temp_41, temp_38);
    // 0x0001D8: 0x4C98079C2307000C Mov
    // 0x0001E8: 0x49A0029000670E06 Ffma
    temp_45 = fma(temp_8, vp_c4.data[1].z, temp_42);
    // 0x0001F0: 0x4C58101000B70905 Fadd
    temp_46 = temp_36 + vp_c4.data[2].w;
    // 0x0001F8: 0x49A0019000270E03 Ffma
    temp_47 = fma(temp_8, vp_c4.data[0].z, temp_43);
    // 0x000208: 0xEFD87F801007FF0E Ald
    temp_48 = in_attr8.x;
    // 0x000210: 0x32A005BF00070C0C Ffma
    temp_49 = fma(vp_c7.data[140].x, 0.5, temp_44);
    // 0x000218: 0x4C58101000770606 Fadd
    temp_50 = temp_45 + vp_c4.data[1].w;
    // 0x000228: 0x5C58300000570A16 Fadd
    temp_51 = 0.0 - temp_46;
    temp_52 = temp_39 + temp_51;
    // 0x000230: 0x5C59100000570505 Fadd
    temp_53 = 0.0 - temp_46;
    temp_54 = temp_53 + temp_46;
    // 0x000238: 0x4C58101000370303 Fadd
    temp_55 = temp_47 + vp_c4.data[0].w;
    // 0x000248: 0x5C90000000C70013 Rro
    // 0x000250: 0x3868104040070C0D Fmul
    temp_56 = temp_49 * 3.0;
    // 0x000258: 0x5080000000071313 Mufu
    temp_57 = cos(temp_49);
    // 0x000268: 0x5C5830000067010B Fadd
    temp_58 = 0.0 - temp_50;
    temp_59 = temp_22 + temp_58;
    // 0x000270: 0x5C58300000370009 Fadd
    temp_60 = 0.0 - temp_55;
    temp_61 = temp_25 + temp_60;
    // 0x000278: 0x38681040A0070C18 Fmul
    temp_62 = temp_49 * 5.0;
    // 0x000288: 0x4C68101409770C19 Fmul
    temp_63 = temp_49 * vp_c5.data[37].w;
    // 0x000290: 0x5C90000000D7001A Rro
    // 0x000298: 0xEFD87F8014C7FF0D Ald
    temp_64 = in_attr12.w;
    // 0x0002A8: 0x59A205800167FF17 Ffma
    temp_65 = 0.0 - temp_59;
    temp_66 = fma(0.0, temp_52, temp_65);
    // 0x0002B0: 0x5080000000071A0C Mufu
    temp_67 = cos(temp_56);
    // 0x0002B8: 0x5C6910000097FF15 Fmul
    temp_68 = 0.0 - temp_61;
    temp_69 = 0.0 * temp_68;
    // 0x0002C8: 0x5C9000000187001B Rro
    // 0x0002D0: 0x59A104800167FF16 Ffma
    temp_70 = 0.0 - temp_52;
    temp_71 = fma(0.0, temp_70, temp_61);
    // 0x0002D8: 0xEFD87F800907FF09 Ald
    temp_72 = in_attr1.x;
    // 0x0002E8: 0x5C9000000197001C Rro
    // 0x0002F0: 0x5C68100001371319 Fmul
    temp_73 = temp_57 * temp_57;
    // 0x0002F8: 0x5080000000071B13 Mufu
    temp_74 = cos(temp_62);
    // 0x000308: 0x5C68100001770817 Fmul
    temp_75 = temp_17 * temp_66;
    // 0x000310: 0x59A00A8000B7FF18 Ffma
    temp_76 = fma(0.0, temp_59, temp_69);
    // 0x000318: 0x5080000000171C15 Mufu
    temp_77 = sin(temp_63);
    // 0x000328: 0x5C58300000270F1A Fadd
    temp_78 = 0.0 - temp_5;
    temp_79 = temp_0 + temp_78;
    // 0x000330: 0xEFD87F800A07FF0B Ald
    temp_80 = in_attr2.x;
    // 0x000338: 0x59A00B8001670416 Ffma
    temp_81 = fma(temp_33, temp_71, temp_75);
    // 0x000348: 0x5C68100000C71919 Fmul
    temp_82 = temp_73 * temp_67;
    // 0x000350: 0xEFD87F800947FF0C Ald
    temp_83 = in_attr1.y;
    // 0x000358: 0x5C58300001271017 Fadd
    temp_84 = 0.0 - temp_6;
    temp_85 = temp_1 + temp_84;
    // 0x000368: 0xEFD87F800987FF12 Ald
    temp_86 = in_attr1.z;
    // 0x000370: 0x59A00B000187070F Ffma
    temp_87 = fma(temp_20, temp_76, temp_81);
    // 0x000378: 0xEFD87F800A47FF18 Ald
    temp_88 = in_attr2.y;
    // 0x000388: 0x4C98079400270016 Mov
    // 0x000390: 0x5C68120001371902 Fmul
    temp_89 = temp_82 * 0.5;
    temp_90 = temp_89 * temp_74;
    // 0x000398: 0xEFD87F800A87FF13 Ald
    temp_91 = in_attr2.z;
    // 0x0003A8: 0x1E23DCCCCCD71515 Fmul32i
    temp_92 = temp_77 * 0.100000001;
    // 0x0003B0: 0x5C68100001A71A1A Fmul
    temp_93 = temp_79 * temp_79;
    // 0x0003B8: 0x51A00B1400471410 Ffma
    temp_94 = fma(temp_12, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0003C8: 0x4C9807940037001B Mov
    // 0x0003D0: 0x59A00A8000270F16 Ffma
    temp_95 = fma(temp_87, temp_90, temp_92);
    // 0x0003D8: 0x4C68101409570D0F Fmul
    temp_96 = temp_64 * vp_c5.data[37].y;
    // 0x0003E8: 0x59A00D0001771717 Ffma
    temp_97 = fma(temp_85, temp_85, temp_93);
    // 0x0003F0: 0x4C68101000070915 Fmul
    temp_98 = temp_72 * vp_c4.data[0].x;
    // 0x0003F8: 0x4C6810100087091A Fmul
    temp_99 = temp_72 * vp_c4.data[2].x;
    // 0x000408: 0x51A00D9400571414 Ffma
    temp_100 = fma(temp_12, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000410: 0x4C6810100047091B Fmul
    temp_101 = temp_72 * vp_c4.data[1].x;
    // 0x000418: 0x4C6810180CF70F0F Fmul
    temp_102 = temp_96 * vp_c6.data[51].w;
    // 0x000428: 0x4C68101000070B0D Fmul
    temp_103 = temp_80 * vp_c4.data[0].x;
    // 0x000430: 0x4C68101000870B19 Fmul
    temp_104 = temp_80 * vp_c4.data[2].x;
    // 0x000438: 0x49A00A9000170C09 Ffma
    temp_105 = fma(temp_83, vp_c4.data[0].y, temp_98);
    // 0x000448: 0x4C68101000470B0B Fmul
    temp_106 = temp_80 * vp_c4.data[1].x;
    // 0x000450: 0x49A00D1000970C15 Ffma
    temp_107 = fma(temp_83, vp_c4.data[2].y, temp_99);
    // 0x000458: 0x5C68100001670F1A Fmul
    temp_108 = temp_102 * temp_95;
    // 0x000468: 0x49A00D9000570C0C Ffma
    temp_109 = fma(temp_83, vp_c4.data[1].y, temp_101);
    // 0x000470: 0x49A006900017180D Ffma
    temp_110 = fma(temp_88, vp_c4.data[0].y, temp_103);
    // 0x000478: 0x49A00C9000971816 Ffma
    temp_111 = fma(temp_88, vp_c4.data[2].y, temp_104);
    // 0x000488: 0x49A0059000571818 Ffma
    temp_112 = fma(temp_88, vp_c4.data[1].y, temp_106);
    // 0x000490: 0x59A00B8001171117 Ffma
    temp_113 = fma(temp_35, temp_35, temp_97);
    // 0x000498: 0x5C90000001A7001D Rro
    // 0x0004A8: 0x5080000000871719 Mufu
    temp_114 = sqrt(temp_113);
    // 0x0004B0: 0x49A0081400070E0B Ffma
    temp_115 = fma(temp_48, vp_c5.data[0].x, temp_94);
    // 0x0004B8: 0x49A0049000271211 Ffma
    temp_116 = fma(temp_86, vp_c4.data[0].z, temp_105);
    // 0x0004C8: 0x5080000000171D09 Mufu
    temp_117 = sin(temp_108);
    // 0x0004D0: 0x49A0061000671210 Ffma
    temp_118 = fma(temp_86, vp_c4.data[1].z, temp_109);
    // 0x0004D8: 0x5080000000071D0C Mufu
    temp_119 = cos(temp_108);
    // 0x0004E8: 0x49A006900027130D Ffma
    temp_120 = fma(temp_91, vp_c4.data[0].z, temp_110);
    // 0x0004F0: 0x49A00A9000A71215 Ffma
    temp_121 = fma(temp_86, vp_c4.data[2].z, temp_107);
    // 0x0004F8: 0x49A00B1000A71312 Ffma
    temp_122 = fma(temp_91, vp_c4.data[2].z, temp_111);
    // 0x000508: 0x49A00C1000671313 Ffma
    temp_123 = fma(temp_91, vp_c4.data[1].z, temp_112);
    // 0x000510: 0x5C6810000117111A Fmul
    temp_124 = temp_116 * temp_116;
    // 0x000518: 0x4CB0119002371A16 F2i
    temp_125 = trunc(vp_c4.data[8].w);
    temp_126 = int(temp_125);
    // 0x000528: 0x49A00A1400170E0E Ffma
    temp_127 = fma(temp_48, vp_c5.data[0].y, temp_100);
    // 0x000530: 0x5C68100000D70D1C Fmul
    temp_128 = temp_120 * temp_120;
    // 0x000538: 0x5C68100001970808 Fmul
    temp_129 = temp_17 * temp_114;
    // 0x000548: 0x59A00D000107101B Ffma
    temp_130 = fma(temp_118, temp_118, temp_124);
    // 0x000550: 0x5C6910000097061A Fmul
    temp_131 = 0.0 - temp_117;
    temp_132 = temp_50 * temp_131;
    // 0x000558: 0x5C68100000C70618 Fmul
    temp_133 = temp_50 * temp_119;
    // 0x000568: 0x5C68100001970414 Fmul
    temp_134 = temp_33 * temp_114;
    // 0x000570: 0x5C68100001970719 Fmul
    temp_135 = temp_20 * temp_114;
    // 0x000578: 0x59A00E0001371304 Ffma
    temp_136 = fma(temp_123, temp_123, temp_128);
    // 0x000588: 0x59A00D800157151B Ffma
    temp_137 = fma(temp_121, temp_121, temp_130);
    // 0x000590: 0x59A30D0000C7031A Ffma
    temp_138 = 0.0 - temp_119;
    temp_139 = 0.0 - temp_132;
    temp_140 = fma(temp_55, temp_138, temp_139);
    // 0x000598: 0x5080000000571B07 Mufu
    temp_141 = inversesqrt(temp_137);
    // 0x0005A8: 0x59A30C0000970317 Ffma
    temp_142 = 0.0 - temp_117;
    temp_143 = 0.0 - temp_133;
    temp_144 = fma(temp_55, temp_142, temp_143);
    // 0x0005B0: 0x3848000000471616 Shl
    temp_145 = temp_126 << 4;
    // 0x0005B8: 0x59A0020001271218 Ffma
    temp_146 = fma(temp_122, temp_122, temp_136);
    // 0x0005C8: 0x5C68100000870F08 Fmul
    temp_147 = temp_102 * temp_129;
    // 0x0005D0: 0x5080000000571818 Mufu
    temp_148 = inversesqrt(temp_146);
    // 0x0005D8: 0x5C58100001A70303 Fadd
    temp_149 = temp_55 + temp_140;
    // 0x0005E8: 0x5C58100001770604 Fadd
    temp_150 = temp_50 + temp_144;
    // 0x0005F0: 0xEF94007048871617 Ldc
    temp_151 = temp_145 + 0x488;
    temp_152 = uint(temp_151) >> 2;
    temp_153 = temp_152 >> 2;
    temp_154 = int(temp_152) & 3;
    temp_155 = vp_c7.data[int(temp_153)][temp_154];
    // 0x0005F8: 0x5C58100000570A06 Fadd
    temp_156 = temp_39 + temp_54;
    // 0x000608: 0x5C68100001470F14 Fmul
    temp_157 = temp_102 * temp_134;
    // 0x000610: 0x5C68100001970F0F Fmul
    temp_158 = temp_102 * temp_135;
    // 0x000618: 0xEF94007068871619 Ldc
    temp_159 = temp_145 + 0x688;
    temp_160 = uint(temp_159) >> 2;
    temp_161 = temp_160 >> 2;
    temp_162 = int(temp_160) & 3;
    temp_163 = vp_c7.data[int(temp_161)][temp_162];
    // 0x000628: 0x5C68100000870208 Fmul
    temp_164 = temp_90 * temp_147;
    // 0x000630: 0x59A0018000A7FF1A Ffma
    temp_165 = fma(0.0, temp_39, temp_149);
    // 0x000638: 0xEFD87F800AC7FF03 Ald
    temp_166 = in_attr2.w;
    // 0x000648: 0x5C68100000771111 Fmul
    temp_167 = temp_116 * temp_141;
    // 0x000650: 0xEFF07F800E07FF0B Ast
    out_attr6.x = temp_115;
    // 0x000658: 0x5C68100000771010 Fmul
    temp_168 = temp_118 * temp_141;
    // 0x000668: 0xEFF07F800E47FF0E Ast
    out_attr6.y = temp_127;
    // 0x000670: 0x5C68100000771515 Fmul
    temp_169 = temp_121 * temp_141;
    // 0x000678: 0xEFF07F800807FF11 Ast
    out_attr0.x = temp_167;
    // 0x000688: 0x59A0020000A7FF0A Ffma
    temp_170 = fma(0.0, temp_39, temp_150);
    // 0x000690: 0xEF95007048071604 Ldc
    temp_171 = temp_145 + 0x480;
    temp_172 = uint(temp_171) >> 2;
    temp_173 = temp_172 >> 2;
    temp_174 = int(temp_172) & 3;
    temp_175 = vp_c7.data[int(temp_173)][temp_174];
    temp_176 = int(temp_172) + 1;
    temp_177 = uint(temp_176) >> 2;
    temp_178 = temp_176 & 3;
    temp_179 = vp_c7.data[int(temp_177)][temp_178];
    // 0x000698: 0x59A003000017FF1D Ffma
    temp_180 = fma(0.0, temp_22, temp_156);
    // 0x0006A8: 0xEF95007068071606 Ldc
    temp_181 = temp_145 + 0x680;
    temp_182 = uint(temp_181) >> 2;
    temp_183 = temp_182 >> 2;
    temp_184 = int(temp_182) & 3;
    temp_185 = vp_c7.data[int(temp_183)][temp_184];
    temp_186 = int(temp_182) + 1;
    temp_187 = uint(temp_186) >> 2;
    temp_188 = temp_186 & 3;
    temp_189 = vp_c7.data[int(temp_187)][temp_188];
    // 0x0006B0: 0x59A10D000097011A Ffma
    temp_190 = 0.0 - temp_117;
    temp_191 = fma(temp_22, temp_190, temp_165);
    // 0x0006B8: 0xEFF07F800887FF15 Ast
    out_attr0.z = temp_169;
    // 0x0006C8: 0x5C68100000F7020F Fmul
    temp_192 = temp_90 * temp_158;
    // 0x0006D0: 0xEFF07F800847FF10 Ast
    out_attr0.y = temp_168;
    // 0x0006D8: 0x59A0050000C7010A Ffma
    temp_193 = fma(temp_22, temp_119, temp_170);
    // 0x0006E8: 0x59A00D0000C7001A Ffma
    temp_194 = fma(temp_25, temp_119, temp_191);
    // 0x0006F0: 0x59A10E800007FF1D Ffma
    temp_195 = 0.0 - temp_25;
    temp_196 = fma(0.0, temp_195, temp_180);
    // 0x0006F8: 0x5C68100001871313 Fmul
    temp_197 = temp_123 * temp_148;
    // 0x000708: 0x5C68100001870D1B Fmul
    temp_198 = temp_120 * temp_148;
    // 0x000710: 0xEFF07F800947FF13 Ast
    out_attr1.y = temp_197;
    // 0x000718: 0x5C68100001871212 Fmul
    temp_199 = temp_122 * temp_148;
    // 0x000728: 0xEFF07F800907FF1B Ast
    out_attr1.x = temp_198;
    // 0x000730: 0x5C68100001470214 Fmul
    temp_200 = temp_90 * temp_157;
    // 0x000738: 0xEFF07F800987FF12 Ast
    out_attr1.z = temp_199;
    // 0x000748: 0x59A005000097000A Ffma
    temp_201 = fma(temp_25, temp_117, temp_193);
    // 0x000750: 0x49A00D0400070801 Ffma
    temp_202 = fma(temp_164, vp_c1.data[0].x, temp_194);
    // 0x000758: 0x49A00E8400070F02 Ffma
    temp_203 = fma(temp_192, vp_c1.data[0].x, temp_196);
    // 0x000768: 0x5C6810000137150D Fmul
    temp_204 = temp_169 * temp_197;
    // 0x000770: 0x5C6810000127110C Fmul
    temp_205 = temp_167 * temp_199;
    // 0x000778: 0x5C68100001B71000 Fmul
    temp_206 = temp_168 * temp_198;
    // 0x000788: 0x49A005040007140A Ffma
    temp_207 = fma(temp_200, vp_c1.data[0].x, temp_201);
    // 0x000790: 0x59A0030000470108 Ffma
    temp_208 = fma(temp_202, temp_175, temp_185);
    // 0x000798: 0x59A00C8001770217 Ffma
    temp_209 = fma(temp_203, temp_155, temp_163);
    // 0x0007A8: 0xEFF07F800D07FF08 Ast
    out_attr5.x = temp_208;
    // 0x0007B0: 0x59A206800127100D Ffma
    temp_210 = 0.0 - temp_204;
    temp_211 = fma(temp_168, temp_199, temp_210);
    // 0x0007B8: 0xEFF07F800D87FF17 Ast
    out_attr5.z = temp_209;
    // 0x0007C8: 0x59A2060001B7150C Ffma
    temp_212 = 0.0 - temp_205;
    temp_213 = fma(temp_169, temp_198, temp_212);
    // 0x0007D0: 0x59A2000001371100 Ffma
    temp_214 = 0.0 - temp_206;
    temp_215 = fma(temp_167, temp_197, temp_214);
    // 0x0007D8: 0x59A0038000570A05 Ffma
    temp_216 = fma(temp_207, temp_179, temp_189);
    // 0x0007E8: 0x4C5830180B070802 Fadd
    temp_217 = 0.0 - vp_c6.data[44].x;
    temp_218 = temp_208 + temp_217;
    // 0x0007F0: 0xEFF07F800D47FF05 Ast
    out_attr5.y = temp_216;
    // 0x0007F8: 0x4C5810180BA71701 Fadd
    temp_219 = temp_209 + vp_c6.data[46].z;
    // 0x000808: 0x5C68100000370D0D Fmul
    temp_220 = temp_211 * temp_166;
    // 0x000810: 0x5C68100000370C0C Fmul
    temp_221 = temp_213 * temp_166;
    // 0x000818: 0xEFF07F800A07FF0D Ast
    out_attr2.x = temp_220;
    // 0x000828: 0x5C6810000037000B Fmul
    temp_222 = temp_215 * temp_166;
    // 0x000830: 0xEFF07F800A47FF0C Ast
    out_attr2.y = temp_221;
    // 0x000838: 0x4C5830180B170503 Fadd
    temp_223 = 0.0 - vp_c6.data[44].y;
    temp_224 = temp_216 + temp_223;
    // 0x000848: 0xEFF07F800A87FF0B Ast
    out_attr2.z = temp_222;
    // 0x000850: 0x4C68101803870204 Fmul
    temp_225 = temp_218 * vp_c6.data[14].x;
    // 0x000858: 0x4C68100C00070802 Fmul
    temp_226 = temp_208 * vp_c3.data[0].x;
    // 0x000868: 0x4C6810180C270107 Fmul
    temp_227 = temp_219 * vp_c6.data[48].z;
    // 0x000870: 0x4C6810180C670109 Fmul
    temp_228 = temp_219 * vp_c6.data[49].z;
    // 0x000878: 0x4C5810180B970500 Fadd
    temp_229 = temp_216 + vp_c6.data[46].y;
    // 0x000888: 0x4C6810180CA70101 Fmul
    temp_230 = temp_219 * vp_c6.data[50].z;
    // 0x000890: 0x49A002180397030F Ffma
    temp_231 = fma(temp_224, vp_c6.data[14].y, temp_225);
    // 0x000898: 0x4C68100C00470803 Fmul
    temp_232 = temp_208 * vp_c3.data[1].x;
    // 0x0008A8: 0x4C58300C0377170A Fadd
    temp_233 = 0.0 - vp_c3.data[13].w;
    temp_234 = temp_209 + temp_233;
    // 0x0008B0: 0x49A0010C00170502 Ffma
    temp_235 = fma(temp_216, vp_c3.data[0].y, temp_226);
    // 0x0008B8: 0xEFF07F800B87FF0A Ast
    out_attr3.z = temp_234;
    // 0x0008C8: 0x49A000980C97000D Ffma
    temp_236 = fma(temp_229, vp_c6.data[50].y, temp_230);
    // 0x0008D0: 0x4C58101002071701 Fadd
    temp_237 = temp_209 + vp_c4.data[8].x;
    // 0x0008D8: 0x4C68100C00870804 Fmul
    temp_238 = temp_208 * vp_c3.data[2].x;
    // 0x0008E8: 0x4C58300C02F70806 Fadd
    temp_239 = 0.0 - vp_c3.data[11].w;
    temp_240 = temp_208 + temp_239;
    // 0x0008F0: 0x49A003980C170007 Ffma
    temp_241 = fma(temp_229, vp_c6.data[48].y, temp_227);
    // 0x0008F8: 0xEFF07F800B07FF06 Ast
    out_attr3.x = temp_240;
    // 0x000908: 0x49A0018C0057050A Ffma
    temp_242 = fma(temp_216, vp_c3.data[1].y, temp_232);
    // 0x000910: 0x49A0010C0027170B Ffma
    temp_243 = fma(temp_209, vp_c3.data[0].z, temp_235);
    // 0x000918: 0x49A004980C570009 Ffma
    temp_244 = fma(temp_229, vp_c6.data[49].y, temp_228);
    // 0x000928: 0x4C5810180B87080C Fadd
    temp_245 = temp_208 + vp_c6.data[46].x;
    // 0x000930: 0x4C5830180B27170E Fadd
    temp_246 = 0.0 - vp_c6.data[44].z;
    temp_247 = temp_209 + temp_246;
    // 0x000938: 0x49A0010C00270103 Ffma
    temp_248 = fma(temp_237, vp_c3.data[0].z, temp_235);
    // 0x000948: 0x49A0020C00970504 Ffma
    temp_249 = fma(temp_216, vp_c3.data[2].y, temp_238);
    // 0x000950: 0x49A0040400171106 Ffma
    temp_250 = fma(temp_167, vp_c1.data[0].y, temp_208);
    // 0x000958: 0x49A0050C00670102 Ffma
    temp_251 = fma(temp_237, vp_c3.data[1].z, temp_242);
    // 0x000968: 0x49A0050C0067170A Ffma
    temp_252 = fma(temp_209, vp_c3.data[1].z, temp_242);
    // 0x000970: 0x4C58100C00370B0B Fadd
    temp_253 = temp_243 + vp_c3.data[0].w;
    // 0x000978: 0x49A003980C070C07 Ffma
    temp_254 = fma(temp_245, vp_c6.data[48].x, temp_241);
    // 0x000988: 0x49A004980C470C09 Ffma
    temp_255 = fma(temp_245, vp_c6.data[49].x, temp_244);
    // 0x000990: 0x49A006980C870C0D Ffma
    temp_256 = fma(temp_245, vp_c6.data[50].x, temp_236);
    // 0x000998: 0x49A0079803A70E0C Ffma
    temp_257 = fma(temp_247, vp_c6.data[14].z, temp_231);
    // 0x0009A8: 0x49A0020C00A70101 Ffma
    temp_258 = fma(temp_237, vp_c3.data[2].z, temp_249);
    // 0x0009B0: 0x4C68100C0B47060E Fmul
    temp_259 = temp_250 * vp_c3.data[45].x;
    // 0x0009B8: 0x4C68100C0AC7060F Fmul
    temp_260 = temp_250 * vp_c3.data[43].x;
    // 0x0009C8: 0x4C68100C0B070611 Fmul
    temp_261 = temp_250 * vp_c3.data[44].x;
    // 0x0009D0: 0x49A0020C00A71704 Ffma
    temp_262 = fma(temp_209, vp_c3.data[2].z, temp_249);
    // 0x0009D8: 0x49A0028400171008 Ffma
    temp_263 = fma(temp_168, vp_c1.data[0].y, temp_216);
    // 0x0009E8: 0x4C68100C0A870606 Fmul
    temp_264 = temp_250 * vp_c3.data[42].x;
    // 0x0009F0: 0x4C58100C00770A0A Fadd
    temp_265 = temp_252 + vp_c3.data[1].w;
    // 0x0009F8: 0x4C68101802C70B0B Fmul
    temp_266 = temp_253 * vp_c6.data[11].x;
    // 0x000A08: 0x4C58300C03370512 Fadd
    temp_267 = 0.0 - vp_c3.data[12].w;
    temp_268 = temp_216 + temp_267;
    // 0x000A10: 0x49A00B8400171500 Ffma
    temp_269 = fma(temp_169, vp_c1.data[0].y, temp_209);
    // 0x000A18: 0xEFF07F800B47FF12 Ast
    out_attr3.y = temp_268;
    // 0x000A28: 0x49A0070C0B57080E Ffma
    temp_270 = fma(temp_263, vp_c3.data[45].y, temp_259);
    // 0x000A30: 0x49A0078C0AD7080F Ffma
    temp_271 = fma(temp_263, vp_c3.data[43].y, temp_260);
    // 0x000A38: 0x49A0088C0B170811 Ffma
    temp_272 = fma(temp_263, vp_c3.data[44].y, temp_261);
    // 0x000A48: 0x49A0030C0A970806 Ffma
    temp_273 = fma(temp_263, vp_c3.data[42].y, temp_264);
    // 0x000A50: 0x49A0059802D70A0A Ffma
    temp_274 = fma(temp_265, vp_c6.data[11].y, temp_266);
    // 0x000A58: 0x4C58100C00B70405 Fadd
    temp_275 = temp_262 + vp_c3.data[2].w;
    // 0x000A68: 0x4C58100C00370303 Fadd
    temp_276 = temp_248 + vp_c3.data[0].w;
    // 0x000A70: 0xEFF07F800C87FF05 Ast
    out_attr4.z = temp_275;
    // 0x000A78: 0x4C6810180BB70707 Fmul
    temp_277 = temp_254 * vp_c6.data[46].w;
    // 0x000A88: 0x49A0070C0B67000E Ffma
    temp_278 = fma(temp_269, vp_c3.data[45].z, temp_270);
    // 0x000A90: 0xEFF07F801207FF07 Ast
    out_attr10.x = temp_277;
    // 0x000A98: 0x49A0078C0AE7000F Ffma
    temp_279 = fma(temp_269, vp_c3.data[43].z, temp_271);
    // 0x000AA8: 0x49A0088C0B270011 Ffma
    temp_280 = fma(temp_269, vp_c3.data[44].z, temp_272);
    // 0x000AB0: 0x49A0030C0AA70006 Ffma
    temp_281 = fma(temp_269, vp_c3.data[42].z, temp_273);
    // 0x000AB8: 0x49A0051802E7050A Ffma
    temp_282 = fma(temp_275, vp_c6.data[11].z, temp_274);
    // 0x000AC8: 0x4C58100C00770202 Fadd
    temp_283 = temp_251 + vp_c3.data[1].w;
    // 0x000AD0: 0x4C68100C02470300 Fmul
    temp_284 = temp_276 * vp_c3.data[9].x;
    // 0x000AD8: 0x4C68100C02870304 Fmul
    temp_285 = temp_276 * vp_c3.data[10].x;
    // 0x000AE8: 0x4C68100C02070305 Fmul
    temp_286 = temp_276 * vp_c3.data[8].x;
    // 0x000AF0: 0x4C68100C01C70307 Fmul
    temp_287 = temp_276 * vp_c3.data[7].x;
    // 0x000AF8: 0x4C58100C00B70101 Fadd
    temp_288 = temp_258 + vp_c3.data[2].w;
    // 0x000B08: 0x4C98079803C70013 Mov
    // 0x000B10: 0x49A0000C02570200 Ffma
    temp_289 = fma(temp_283, vp_c3.data[9].y, temp_284);
    // 0x000B18: 0x49A0020C02970204 Ffma
    temp_290 = fma(temp_283, vp_c3.data[10].y, temp_285);
    // 0x000B28: 0x49A0028C02170203 Ffma
    temp_291 = fma(temp_283, vp_c3.data[8].y, temp_286);
    // 0x000B30: 0x49A0038C01D70207 Ffma
    temp_292 = fma(temp_283, vp_c3.data[7].y, temp_287);
    // 0x000B38: 0x4C98079803070008 Mov
    // 0x000B48: 0x4C6810180BB70909 Fmul
    temp_293 = temp_255 * vp_c6.data[46].w;
    // 0x000B50: 0x49A0000C02670100 Ffma
    temp_294 = fma(temp_288, vp_c3.data[9].z, temp_289);
    // 0x000B58: 0xEFF07F801247FF09 Ast
    out_attr10.y = temp_293;
    // 0x000B68: 0x49A0020C02A70104 Ffma
    temp_295 = fma(temp_288, vp_c3.data[10].z, temp_290);
    // 0x000B70: 0x49A0018C02270103 Ffma
    temp_296 = fma(temp_288, vp_c3.data[8].z, temp_291);
    // 0x000B78: 0x49A0038C01E70107 Ffma
    temp_297 = fma(temp_288, vp_c3.data[7].z, temp_292);
    // 0x000B88: 0x4C6810180BB70D0D Fmul
    temp_298 = temp_256 * vp_c6.data[46].w;
    // 0x000B90: 0x51A0099803B70C0C Ffma
    temp_299 = fma(temp_257, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000B98: 0xEFF07F801287FF0D Ast
    out_attr10.z = temp_298;
    // 0x000BA8: 0x4C58100C0B770E0E Fadd
    temp_300 = temp_278 + vp_c3.data[45].w;
    // 0x000BB0: 0xEFF07F801047FF0C Ast
    out_attr8.y = temp_299;
    // 0x000BB8: 0x4C58100C0AF70F0F Fadd
    temp_301 = temp_279 + vp_c3.data[43].w;
    // 0x000BC8: 0xEFF07F8011C7FF0E Ast
    out_attr9.w = temp_300;
    // 0x000BD0: 0x4C58100C0B371111 Fadd
    temp_302 = temp_280 + vp_c3.data[44].w;
    // 0x000BD8: 0xEFF07F801147FF0F Ast
    out_attr9.y = temp_301;
    // 0x000BE8: 0x4C58100C0AB70606 Fadd
    temp_303 = temp_281 + vp_c3.data[42].w;
    // 0x000BF0: 0xEFF07F801187FF11 Ast
    out_attr9.z = temp_302;
    // 0x000BF8: 0x51A0041802F70A0A Ffma
    temp_304 = fma(temp_282, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000C08: 0xEFF07F801107FF06 Ast
    out_attr9.x = temp_303;
    // 0x000C10: 0x4C58100C02770000 Fadd
    temp_305 = temp_294 + vp_c3.data[9].w;
    // 0x000C18: 0xEFF07F801007FF0A Ast
    out_attr8.x = temp_304;
    // 0x000C28: 0x4C58100C02B70404 Fadd
    temp_306 = temp_295 + vp_c3.data[10].w;
    // 0x000C30: 0xEFF07F800787FF00 Ast
    gl_Position.z = temp_305;
    // 0x000C38: 0x4C58100C02370303 Fadd
    temp_307 = temp_296 + vp_c3.data[8].w;
    // 0x000C48: 0xEFF07F8007C7FF04 Ast
    gl_Position.w = temp_306;
    // 0x000C50: 0x4C58100C01F70707 Fadd
    temp_308 = temp_297 + vp_c3.data[7].w;
    // 0x000C58: 0xEFF07F800747FF03 Ast
    gl_Position.y = temp_307;
    // 0x000C68: 0xEFF07F800707FF07 Ast
    gl_Position.x = temp_308;
    // 0x000C70: 0xE30000000007000F Exit
    return;
}
